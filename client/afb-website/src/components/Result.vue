<template>
  <div class="result-container">
    <!-- <div class="top-bar-mobile" v-if="isMobile">
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
    </div>-->
    <div class="top-bar">
      <div class="logo-bar">
        <router-link to="/">
          <img class="logo-image" src="../assets/AgeFriendlyBusinessLogo2.svg" alt="logo">
        </router-link>
      </div>

      <img
        class="font-change-icon"
        src="@/assets/font-change-button.svg"
        alt="change font icon"
        @click="enlarge=!enlarge"
      >
    </div>

    <div class="score-section">
      <div class="left-section">
        <div class="text-area">
          <h1 :style="enlarge? {fontSize:'42px'}:{}">Here's your {{testType}} score</h1>
          <h2 :style="enlarge? {fontSize:'38px'}:{}">{{summary}}</h2>
          <h2 :style="enlarge? {fontSize:'38px'}:{}">Congratulations! You finished the test!</h2>
        </div>
        <div class="btn-section">
          <el-button size="mini" @click="$emit('retryWithBusInfo', Result[0])">retry</el-button>
          <el-button size="mini">download tips</el-button>
        </div>
      </div>

      <dir class="score-circle">
        <el-progress
          type="circle"
          :percentage="correctPercent"
          color="#8e71c7"
          status="text"
          :width="circleSize"
        >{{correctCount}} / {{totalQ}}</el-progress>
      </dir>
    </div>

    <el-tabs class="tabs" v-model="activeName" :stretch="true">
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
    <Footer></Footer>
  </div>
</template>
<script>
import ResultDetail from "./ResultDetail";
import Footer from "./Footer";
export default {
  name: "result",
  components: {
    ResultDetail,
    Footer
  },
  props: ["Result", "Questions", "generalTips"],
  data() {
    return {
      testType: "Employer",
      summary: "Your business is very age-friendly!",
      activeName: "n0",
      totalQ: 0,
      correctCount: 0,
      questions: this.Questions,
      enlarge: false,
      circleSize: 200
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
  mounted: function() {
    this.reorderArray(this.combinedQuestionAndResponse);
  }
};
</script>
<style scoped>
.result-container {
  /* overflow: scroll; */
}
.top-bar {
  padding-top: 50px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-bar {
  display: flex;
  align-items: center;
  color: #155777;
  font-family: "DDINRegular";
}
.logo-image {
  height: 80px;
}
.score-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}
.tabs {
  width: 90%;
  margin: auto;
}
.font-change-icon {
  width: 50px;
  height: 50px;
}
.logo-text {
  padding-left: 10px;
}
.left-section {
  padding-left: 100px;
  padding-right: 50px;
}

.score-circle {
  padding-right: 100px;
  font-weight: bold;
}

.text-area {
  font-family: "DDINRegular";
}
.text-area h1 {
  font-size: 36px;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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
</style>
