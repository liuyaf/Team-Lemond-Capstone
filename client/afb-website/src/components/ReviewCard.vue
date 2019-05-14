<template>
  <el-card class="box-card" :body-style="{padding: '0px'}">
    <div
      class="question-title"
      style="padding: 8px;"
      :style="enlarge? {fontSize:'24px'}:{}"
    >{{Response.question}}</div>
    <div class="answer-area">
      <img src="../assets/result-correct.svg" alt="correct" v-if="Response.response=='yes'">
      <img src="../assets/result-wrong.svg" alt="wrong" v-else>
      <h3>Your Answer: {{Response.response=="yes"? "YES":"NO"}}</h3>
    </div>
    <div class="card-tips" :style="enlarge? {fontSize:'24px'}:{}">
      <p>{{Response.response=="yes"? Response.tips.yes : Response.tips.no}}</p>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "review-card",
  props: {
    Response: Object,
    enlarge: Boolean
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.question-title {
  font-weight: bold;
}
.box-card {
  margin-top: 15px;
  width: 350px;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
}
.answer-area {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-tips {
  align-self: flex-end;
  margin: 0 auto;
  width: 98%;
  background: #f9f9f9;
  word-wrap: break-word;
  margin-bottom: 4px;
  padding: 5px;
}
.card-tips p {
  margin: 0;
}
h3 {
  padding-left: 5px;
}
</style>

