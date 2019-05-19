<template>
  <div class="input-container">
    <h3 :style="enlarge? {fontSize:'32px'}:{}">{{Content.title}}</h3>
    <el-input
      class="input"
      v-model="response"
      placeholder="Please enter your zipcode"
      type="number"
      @keyup.enter.native="response.length >= 5? $emit('continue', response, Content.questionID):''"
      @blur="response.length >= 5? $emit('continue', response, Content.questionID):''"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "input-form",
  props: {
    Content: Object,
    enlarge: Boolean
  },
  data() {
    return {
      response: ""
    };
  },
  method: {
    alert: function() {
      window.alert("hi");
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
.input {
  width: 350px !important;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
