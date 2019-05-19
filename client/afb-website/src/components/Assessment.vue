<template>
  <div id="assessment">
    <transition name="slide-fade" mode="out-in">
      <div class="main-container" v-if="!isFinished & !showOnbard">
        <div class="top-panel">
          <div class="title-panel">
            <p
              id="title-vertical"
              :style="[{background: color[currentSectionNum]},  isAtTOA? {background:'#9F2B00'}:{}]"
            ></p>
            <p
              class="section-title"
              :style="[enlargeFont? {fontSize:'32px'}:{}, {color:color[currentSectionNum]}, isAtTOA? {color:'#9F2B00'}:{}]"
            >
              <span
                v-if="TOADone & currentSectionNum!==0"
              >section {{currentSectionNum}}/{{sectionCount}}</span>
              {{sectionTitle}}
            </p>
          </div>
          <div class="control-panel">
            <el-button size="mini" @click="enlargeFont=!enlargeFont">
              <img
                class="font-change-icon"
                src="../assets/font-change-icon.svg"
                alt="change font icon"
              >
            </el-button>
          </div>
        </div>
        <div class="question-select" v-if="currentSectionLength>0">
          <button
            id="triangle-left"
            :style="[reachHead?{'visibility': 'hidden'}:{'visibility': 'visible'}]"
            @click="currentQuestionNum--"
          >
            <i class="el-icon-caret-left"></i>
          </button>
          <el-button
            type="mini"
            class="question-btn"
            :style="[isSelected(x)?{'background-color':color[currentSectionNum]}:{},
                      currentQuestionNum===x-1?{'background-color':color[currentSectionNum]}:{},
                      {'border-color': color[currentSectionNum]},
                      enlargeFont?{'width':'50px', 'height':'50px', 'fontSize':'22px'}:{}]"
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
            <i class="el-icon-caret-right"></i>
          </button>
        </div>
        <transition name="slide-fade" mode="out-in">
          <keep-alive>
            <TermOA
              v-if="isAtTOA"
              @continue="TOADone=true, showOnbard=true"
              :key="TOA.id"
              :TOAContent="TOA.content"
              :enlarge="enlargeFont"
            ></TermOA>
            <Dropdown
              v-if="currentQuestion.type === 'dropdown'"
              :key="currentQuestionID"
              :Content="currentQuestion"
              @continue="recordResponseAndMoveToNextQuestion"
              :enlarge="enlargeFont"
            ></Dropdown>
            <InputForm
              v-if="currentQuestion.type === 'input'"
              :key="currentQuestionID"
              :Content="currentQuestion"
              @continue="recordResponseAndMoveToNextQuestion"
              :enlarge="enlargeFont"
            ></InputForm>
            <Radiogroup
              v-if="currentQuestion.type === 'radio'"
              @continue="recordResponseAndMoveToNextQuestion"
              :key="currentQuestionID"
              :Content="currentQuestion"
              :fill="color[currentSectionNum]"
              :enlarge="enlargeFont"
            ></Radiogroup>
          </keep-alive>
        </transition>
        <div class="section-control" v-if="TOADone">
          <el-button
            :style="reachSectionHead?{visibility: 'hidden'}:{}"
            @click="moveToPrevSection"
            :disabled="reachSectionHead"
            class="prev-section selection-btn"
          >prev section</el-button>
          <el-button
            class="next-section selection-btn"
            v-if="currentSectionNum != sectionLength-1"
            :disabled="!finishCurrentSection"
            @click="moveToNextSection"
          >next section</el-button>
          <el-button
            @click="isFinished=true"
            class="submit selection-btn"
            v-if="currentSectionNum == sectionLength-1"
            :disabled="!finishCurrentSection"
          >Submit</el-button>
        </div>
      </div>
      <OnboardCard v-else-if="showOnbard" @skipOnboard="showOnbard=false"></OnboardCard>
      <Result
        v-else
        :Result="result"
        :Questions="sections.slice(1)"
        :enlarge="enlargeFont"
        :generalTips="generalTips"
      ></Result>
    </transition>
  </div>
</template>

<script>
import TermOA from "./TOA";
import Dropdown from "./Dropdown";
import InputForm from "./Input";
import Radiogroup from "./Raidogroup";
import Result from "./Result";
import OnboardCard from "./OnboardCard";
export default {
  name: "assessment",
  props: ["TOA", "sections", "generalTips"],
  components: {
    TermOA,
    Dropdown,
    InputForm,
    Radiogroup,
    Result,
    OnboardCard
  },

  data() {
    return {
      name: "customer",
      showOnbard: false,
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
      result: []
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
        return this.TOA.title;
      } else {
        return this.sections[this.currentSectionNum].sectionTitle;
      }
    },
    isAtTOA: function() {
      return !this.TOADone;
    },
    sectionLength: function() {
      return this.sections.length;
    },
    currentSection: function() {
      if (!this.isAtTOA) {
        return this.sections[this.currentSectionNum];
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
        return this.sections[this.currentSectionNum].questions.length;
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
    },
    sectionCount: function() {
      return this.sections.length - 1;
    }
  },
  methods: {
    recordResponseAndMoveToNextQuestion: function(response, id) {
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
  mounted() {},
  watch: {}
};
</script>

<style scoped>
.main-container {
  align-items: center;
  overflow: scroll;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 94%;
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
  color: #fff;
}
.top-panel {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  /* border-left: 5px solid black; */
  padding-left: 0.5rem;
  font-weight: bold;
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

.question-select {
  padding-bottom: 40px;
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

.next-section {
  align-self: flex-end;
}
.submit {
  align-self: flex-end;
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
.component-area {
  display: flex;
  justify-content: center;
}
.font-change-icon {
  width: 20px;
  height: 20px;
}

.section-control {
  padding-top: 60px;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
}

.selection-btn {
  color: #fff;
  background: #155777;
  border-color: #155777;
}

@media (min-width: 768px) {
  .section-control {
    bottom: 30px;
  }
}
</style>
