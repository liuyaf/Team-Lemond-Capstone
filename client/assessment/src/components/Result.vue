<template>
  <div>
    <div class="top-bar">
      <div class="logo-bar">
        <img src="../assets/AgeFriendlyBusinessLogo1.svg" alt="logo">
        <h1>Age Friendly Business</h1>
      </div>
      <button @click="enlargeFont=!enlargeFont">font change</button>
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
      <el-progress type="circle" :percentage="correctCount" color="#8e71c7" status="text">4/5</el-progress>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="test" name="first">
        <ResultDetail></ResultDetail>
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
  props: ["Result"],
  data() {
    return {
      testType: "Employer",
      result: this.Result,
      summary: "Your business is very age-friendly!",
      activeName: "first"
    };
  },
  computed: {
    correctCount: function() {
      let count = 0;
      let ynCOunt = 0;
      for (let i = 0; i < this.result.length; i++) {
        for (let j = 0; j < this.result[i].length; j++) {
          if (this.result[i][j] == "yes" || this.result[i][j] == "no") {
            ynCOunt++;
            if (this.result[i][j] == "yes") {
              count++;
            }
          }
        }
      }
      return (count / ynCOunt) * 100;
    }
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
</style>
