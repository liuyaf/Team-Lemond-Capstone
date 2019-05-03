<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <div class="container" v-if="!isFinished" :style="[enlargeFont? {fontSize:'32px'}:{}]">
        <div class="top-panel">
          <div class="title-panel">
            <p id="title-vertical" :style="{background: color[currentSectionNum]}"></p>
            <p class="section-title" :style="{color:color[currentSectionNum]}">
              <span v-if="TOADone">section {{currentSectionNum+1}}/6</span>
              {{sectionTitle}}
            </p>
          </div>

          <div class="control-panel">
            <button @click="enlargeFont=!enlargeFont">font change</button>
          </div>
        </div>
        <div class="question-select" v-if="currentSectionLength>0">
          <button
            id="triangle-left"
            :style="[reachHead?{'visibility': 'hidden'}:{'visibility': 'visible'}]"
            @click="currentQuestionNum--"
          >
            <img src="../assets/triangle-left.svg" alt="triangle left">
          </button>
          <el-button
            size="mini"
            class="question-btn"
            :style="[isSelected(x)?{'background-color':color[currentSectionNum]}:{},
                      currentQuestionNum===x-1?{'background-color':color[currentSectionNum]}:{},
                      {'border-color': color[currentSectionNum]}]"
            :class="{selected: isSelected(x), selecting: currentQuestionNum===x-1}"
            v-for="x in currentSectionLength"
            :key="x"
            @click="currentQuestionNum=x-1"
          >{{x}}</el-button>
          <button
            id="triangle-right"
            :style="[reachTail?{'visibility': 'hidden'}:{'visibility': 'visible'}]"
            @click="currentQuestionNum++"
          >
            <img src="../assets/triangle-right.svg" alt="triangle right">
          </button>
        </div>
        <transition name="slide-fade" mode="out-in">
          <keep-alive>
            <TermOA
              v-if="isAtTOA"
              @continue="TOADone=true"
              :key="content.TOA.id"
              :TOAContent="content.TOA.content"
            ></TermOA>
            <Dropdown
              v-if="currentQuestion.type === 'dropdown'"
              :key="currentQuestionID"
              :Content="currentQuestion"
              @continue="recordResponseAndMoveToNextQuestion"
            ></Dropdown>
            <InputForm
              v-if="currentQuestion.type === 'input'"
              :key="currentQuestionID"
              :Content="currentQuestion"
              @continue="recordResponseAndMoveToNextQuestion"
            ></InputForm>
            <Radiogroup
              v-if="currentQuestion.type === 'radio'"
              @continue="recordResponseAndMoveToNextQuestion"
              :key="currentQuestionID"
              :Content="currentQuestion"
            ></Radiogroup>
          </keep-alive>
        </transition>
        <div v-if="TOADone">
          <el-button
            size="medium"
            v-if="!reachSectionHead"
            @click="moveToPrevSection"
            class="prev-section"
          >prev section</el-button>
          <el-button
            class="next-section"
            v-if="currentSectionNum != sectionCount-1"
            size="medium"
            :disabled="!finishCurrentSection"
            @click="moveToNextSection"
          >next section</el-button>
          <el-button
            @click="isFinished=true"
            class="submit"
            size="medium"
            v-if="currentSectionNum == sectionCount-1"
            :disabled="!finishCurrentSection"
          >Submit</el-button>
        </div>
      </div>
      <Result v-else :Result="result"></Result>
    </transition>
  </div>
</template>

<script>
import TermOA from "./TOA";
import Dropdown from "./Dropdown";
import InputForm from "./Input";
import Radiogroup from "./Raidogroup";
import Result from "./Result";
export default {
  name: "assessment",
  components: {
    TermOA,
    Dropdown,
    InputForm,
    Radiogroup,
    Result
  },

  data() {
    return {
      color: [
        "#292929",
        "#9F2B00",
        "#2545BF",
        "#753A88",
        "#5F4585",
        "#0C028D",
        "#96207C"
      ],
      culQNu: 1,
      enlargeFont: false,
      isFinished: false,
      currentSectionNum: 0,
      currentQuestionNum: 0,
      selected: "",
      TOADone: false,
      result: [],
      content: {
        TOA: {
          id: "toa",
          // name: "terms of agreement",
          title: "Assessment Terms of Agreement",
          content: [
            {
              title: "Terms of Agreement and Condition",
              content:
                "<p>The Age Friendly Business website and assessments may contain links to third-party sites that are not owned and we cannot control. We assume no responsibility for the content, privacy policies, or practices of any third part websites or services. By acknowledging that you have received this information, you are agreeing that Age Friendly Business and the City of Seattle shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any content, goods, or services available on or through this website.</p>"
            },
            {
              title: "Changes",
              content:
                "<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>"
            },
            {
              title: "Information & Privacy",
              content:
                '<p>Your assessment score, personal information, and details about your business will not be stored. If you wish to keep your assessment score and related tips or resources, please save the material as a PDF or JPG before you leave the page. \nIf you have comments or questions about content or functionality of this website, you are welcome to e-mail <a href = "mailto: agefriendly@seattle.gov">agefriendly@seattle.gov</a>. Please include a link to the specific webpage.</p>'
            }
          ]
        },
        sections: [
          {
            sectionID: 1,
            sectionTitle: "section 1",
            questions: [
              {
                questionID: 1,
                type: "dropdown",
                title: "What's your business type?",
                questionContent: {}
              },
              {
                questionID: 2,
                type: "input",
                title: "What's your business's zipcode?",
                questionContent: {}
              },
              {
                questionID: 3,
                type: "radio",
                title: "This is a test title?",
                questionContent: {}
              }
            ]
          },
          {
            sectionID: 2,
            sectionTitle: "section 2",
            questions: [
              {
                questionID: 1,
                type: "radio",
                title: "yes or no question",
                questionContent: {}
              },
              {
                questionID: 2,
                type: "radio",
                title: "asdasdasd",
                questionContent: {}
              },
              {
                questionID: 3,
                type: "radio",
                title: "This is a test title2?",
                questionContent: {}
              }
            ]
          }
          // { sectionTitle: "section 3", questions: [] },
          // { sectionTitle: "section 4", questions: [] },
          // { sectionTitle: "section 5", questions: [] },
          // { sectionTitle: "section 6", questions: [] }
        ]
      }
    };
  },
  computed: {
    reachHead: function() {
      return this.currentQuestionNum === 0;
    },
    reachTail: function() {
      return this.currentQuestionNum === this.currentSectionLength - 1;
    },
    // TODO: fix numbering;
    sectionTitle: function() {
      if (this.isAtTOA) {
        return this.content.TOA.title;
      } else {
        return this.content.sections[this.currentSectionNum].sectionTitle;
      }
    },
    isAtTOA: function() {
      return !this.TOADone;
    },
    sectionCount: function() {
      return this.content.sections.length;
    },
    currentSection: function() {
      if (!this.isAtTOA) {
        return this.content.sections[this.currentSectionNum];
      }
      return "";
    },
    currentQuestion: function() {
      if (this.currentSection != "") {
        return this.currentSection.questions[this.currentQuestionNum];
      }
      return "";
    },
    currentSectionLength: function() {
      if (this.currentSection != "") {
        return this.content.sections[this.currentSectionNum].questions.length;
      }
      return 0;
    },
    currentQuestionID: function() {
      if (this.currentQuestion != "")
        return "" + this.currentSectionNum + this.currentQuestion.questionID;
      return 0;
    },
    reachSectionHead: function() {
      return this.currentSectionNum === 0;
    },
    finishCurrentSection: function() {
      let temp = this.result[this.currentSectionNum];
      if (temp != undefined) {
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === undefined) return false;
        }
        return temp.length === this.currentSectionLength;
      }
      return false;
    }
  },
  methods: {
    recordResponseAndMoveToNextQuestion: function(response, id) {
      // this.result[id - 1] = response;
      // vm.$set(this.result, id - 1, response);
      if (this.result[this.currentSectionNum] === undefined) {
        let newArr = [];
        this.$set(this.result, this.currentSectionNum, newArr);
      }
      let temp = this.result[this.currentSectionNum];
      temp[id - 1] = response;
      this.$set(this.result, this.currentSectionNum, temp);
      if (this.currentQuestionNum < this.currentSectionLength - 1)
        this.currentQuestionNum++;
    },
    moveToNextSection: function() {
      this.currentSectionNum++;
      this.currentQuestionNum = 0;
    },
    moveToPrevSection: function() {
      this.currentSectionNum--;
    },
    isSelected: function(x) {
      if (this.result[this.currentSectionNum] === undefined) {
        return false;
      } else if (this.result[this.currentSectionNum][x - 1] === undefined) {
        return false;
      } else {
        return true;
      }
    }
  },
  beforeMount() {}
};
</script>

<style scoped>
.container {
  overflow: scroll;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 90%;
  max-height: 80%;
  margin: auto;
  font-family: "DDINRegular";
  font-size: 24px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

#title-vertical {
  border-radius: 15px;

  padding-top: 8px;
  padding-right: 5px;
  padding-bottom: 8px;
}

.question-select .selected,
.question-select .selecting {
  background-color: #409eff;
  color: #fff;
}
.top-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  /* border-left: 5px solid black; */
  padding-left: 0.5rem;
  /* border-left-color: black;
  font-size: 5rem; */
}

.control-panel {
  padding-right: 2rem;
}

.title-panel {
  display: flex;
  align-items: center;
  /* justify-content: space-between */
  padding-left: 2rem;
}

#triangle-left,
#triangle-right {
  border: none;
  background: none;
  cursor: pointer;
}

#triangle-left img,
#triangle-right img {
  height: 21px;
  width: 20px;
}

.question-select {
  padding-bottom: 20px;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.question-btn {
  border-color: #409eff;
  width: 40px;
  height: 40px;
  color: #000000;
}

.prev-section {
  position: absolute;
  bottom: 30px;
  left: 57.5px;
}
.next-section {
  position: absolute;
  bottom: 30px;
  right: 57.5px;
}
.submit {
  position: absolute;
  bottom: 30px;
  right: 57.5px;
}

.result-logo-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.result-title {
  font-size: 30px;
  font-family: "Fjalla One", sans-serif;
  color: #155777;
}
</style>
