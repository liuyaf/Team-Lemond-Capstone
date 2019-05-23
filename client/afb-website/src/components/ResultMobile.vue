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
        @click="enlarge=!enlarge"
      >
    </div>
    <div class="score-section">
      <div class="text-section">
        <h3
          :style="enlarge? {fontSize: '36px'}:{}"
        >Here’s your Age-Friendly {{testType=='employer'? "Employer":"Customer Service"}} score</h3>
        <p :style="enlarge? {fontSize: '22px'}:{}">Congratulations– you completed the assessment!</p>
        <p
          :style="enlarge? {fontSize: '22px'}:{}"
        >Taking the time to complete this assessment shows your commitment to {{testType=="employer"?"being an age-friendly employer":"providing age-friendly customer service"}}.</p>
        <p
          :style="enlarge? {fontSize: '22px'}:{}"
        >Please take a moment to review your results and get tips to make your business even more age-friendly.</p>
      </div>
      <el-progress type="circle" :percentage="correctPercent" color="#cc3e16" status="text">
        <span :style="{fontSize: '28px'}">{{correctCount}} / {{totalQ}}</span>
      </el-progress>
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
          :color="color[index]"
        ></ResultDetail>
      </el-tab-pane>
    </el-tabs>
    <Footer></Footer>
  </div>
</template>

<script>
import ResultDetail from "./ResultDetail";
import Footer from "./Footer";
export default {
  name: "resultmobile",
  props: ["Result", "Questions", "generalTips"],
  components: {
    ResultDetail,
    Footer
  },
  data() {
    return {
      color: [
        "#FFF4F1",
        "#f5f7fe",
        "#F1EBF3",
        "rgba(95,69,133,0.12)",
        "#E7E6F4",
        "#F4E8F2"
      ],
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

.text-section {
  text-align: center;
  font-family: "DDINRegular";
  padding-left: 5px;
  padding-right: 5px;
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

.score-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
