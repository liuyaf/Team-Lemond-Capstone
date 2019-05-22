<template>
  <div class="result-container">
    <div class="top-bar-mobile">
      <div class="logo-bar">
        <router-link to="/">
          <img class="logo-image" src="../assets/AgeFriendlyBusinessLogo2.svg" alt="logo">
        </router-link>
      </div>
      <img
        src="@/assets/font-change-button.svg"
        class="navBtnImg ml-2 svgButton navDisplay font-change-icon-mobile"
        alt="Assessment font change button"
      >
    </div>
    <div class="score-section">
      <div class="text-section">
        <h3>asd</h3>
        <p>asdasd</p>
        <p>asdasdasd</p>
      </div>
      <dir class="score-circle">
        <el-progress type="circle" :percentage="80" color="#8e71c7" status="text">123/ 456</el-progress>
      </dir>
    </div>
    <el-tabs v-model="activeName" class="tabs" :stretch="true">
      <el-tab-pane
        class="tab-pane"
        v-for="(section, index) in questions"
        :key="index"
        :label="section.sectionTitle"
        :name="'n' + index"
      >
        <ResultDetail
          :TipsAndResponse="combinedQuestionAndResponse[index]"
          :sectionTitle="section.sectionTitle"
          :enlarge="enlarge"
          :generalTips="findTipsFromMap(section.sectionTitle)"
        ></ResultDetail>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ResultDetail from "./ResultDetail";

export default {
  name: "resultmobile",
  props: ["Result", "Questions", "generalTips"],
  components: {
    ResultDetail
  },
  data() {
    return {
      testType: "Employer",
      activeName: "n0",
      totalQ: 0,
      correctCount: 0,
      questions: this.Questions,
      enlarge: false
    };
  },
  computed: {
    isMobile: function() {
      return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
    },
    correctPercent: function() {
      let count = 0;
      let total = 0;
      for (let i = 0; i < this.questionResponse.length; i++) {
        for (let j = 0; j < this.questionResponse[i].length; j++) {
          if (this.questionResponse[i][j] == "yes") {
            count++;
          }
          total++;
        }
      }
      this.updateNumber(count, total);
      return (count / total) * 100;
    },
    questionResponse: function() {
      return this.Result.slice(1);
    },
    combinedQuestionAndResponse: function() {
      let output = [];
      for (let i = 0; i < this.questionResponse.length; i++) {
        let tempArr = [];
        for (let j = 0; j < this.questionResponse[i].length; j++) {
          let QApair = {};
          QApair.question = this.questions[i].questions[j].title;
          QApair.tips = this.questions[i].questions[j].questionContent;
          QApair.response = this.questionResponse[i][j];
          tempArr.push(QApair);
        }
        output.push(tempArr);
      }
      return output;
    }
  },
  methods: {
    updateNumber: function(count, total) {
      this.totalQ = total;
      this.correctCount = count;
    },
    reorderArray: function(input) {
      for (let i = 0; i < input.length; i++) {
        let pointer = 0;
        for (let j = 0; j < input[i].length; j++) {
          if (input[i][pointer].response == "yes") {
            input[i].push(input[i].splice(pointer, 1)[0]);
            pointer--;
          }
          pointer++;
        }
      }
      return input;
    },
    findTipsFromMap: function(key) {
      return this.generalTips.get(key);
    }
  },
  mounted() {
    this.reorderArray(this.combinedQuestionAndResponse);
  }
};
</script>

<style scoped>
.logo-bar img {
  width: 230px;
}

.top-bar-mobile {
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.font-change-icon-mobile {
  width: 40px;
  height: 40px;
}

.tabs {
  width: 95%;
  margin: auto;
}
</style>
