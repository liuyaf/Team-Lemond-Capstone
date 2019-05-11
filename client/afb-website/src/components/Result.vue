<template>
  <div>
    <div class="top-bar">
      <div class="logo-bar">
        <img src="../assets/AgeFriendlyBusinessLogo1.svg" alt="logo">
        <h1>Age Friendly Business</h1>
      </div>
      <!-- <button @click="enlargeFont=!enlargeFont">font change</button> -->
    </div>
    <div class="score-section">
      <div class="left-section">
        <div class="text-area">
          <h1>Here's your {{testType}} score</h1>
          <h2>{{summary}}</h2>
          <h2>Congratulations! You finished the test!</h2>
        </div>
        <div class="btn-section">
          <button>retry</button>
          <button>download tips</button>
        </div>
      </div>

      <el-progress
        type="circle"
        :percentage="correctPercent"
        color="#8e71c7"
        status="text"
      >{{correctCount}}/{{totalQ}}</el-progress>
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
        ></ResultDetail>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ResultDetail from "./ResultDetail";
export default {
  name: "result",
  components: {
    ResultDetail
  },
  props: ["Result", "Questions"],
  data() {
    return {
      testType: "Employer",
      summary: "Your business is very age-friendly!",
      activeName: "n0",
      totalQ: 0,
      correctCount: 0,
      questions: this.Questions
    };
  },
  computed: {
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
        for (let j = 0; j < input[i].length; j++) {
          if (input[i][j].response == "yes") {
            input[i].push(input[i].splice(j, 1)[0]);
          }
        }
      }
      return input;
    }
  },
  mounted: function() {
    this.reorderArray(this.combinedQuestionAndResponse);
  }
};
</script>
<style>
.top-bar {
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
.score-section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.tabs {
  width: 90%;
  margin: auto;
}
</style>
