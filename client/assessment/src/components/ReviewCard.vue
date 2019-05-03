<template>
  <el-card class="box-card" :body-style="{padding: '0px'}">
    <div class="question-title" style="padding-top: 20px;">title</div>
    <div class="answer-area">
      <img src="../assets/result-correct.svg" alt="correct" v-if="correct">
      <img src="../assets/result-wrong.svg" alt="wrong" v-else>
      <h3>Your Answer: {{correct? "YES":"NO"}}</h3>
    </div>
    <div class="card-tips">
      <p>{{tips}}</p>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "review-card",
  data() {
    return {
      correct: true,
      tips: "So good—review at least annually."
    };
  }
};
</script>
<style scoped>
.box-card {
  width: 400px;
  position: relative;
  height: 200px;
}
.answer-area {
  display: flex;
  justify-content: center;
  align-content: center;
}
.card-tips {
  width: 98%;
  background: #f9f9f9;
  word-wrap: break-word;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  margin: auto;
}
</style>

