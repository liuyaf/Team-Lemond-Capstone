<template>
  <el-card class="box-card" :body-style="{padding: '0px'}">
    <div class="question-title" style="padding-top: 20px;">{{question}}</div>
    <div class="answer-area">
      <img src="../assets/result-correct.svg" alt="correct" v-if="correct">
      <img src="../assets/result-wrong.svg" alt="wrong" v-else>
      <h3>Your Answer: {{correct? "YES":"NO"}}</h3>
    </div>
    <div class="card-tips">
      <p>{{correct? tips[0] : tips[1]}}</p>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "review-card",
  props: {
    correct: Boolean,
    question: String,
    tips: Array
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.box-card {
  margin-top: 15px;
  width: 350px;
  display: flex;
  flex-flow: column nowrap;
}
.answer-area {
  display: flex;
  justify-content: center;
  align-content: center;
}
.card-tips {
  align-self: flex-end;
  margin: 0 auto;
  width: 98%;
  background: #f9f9f9;
  word-wrap: break-word;
  margin-bottom: 4px;
}
.card-tips p {
  margin: 0;
}
h3 {
  padding-left: 5px;
}
</style>

