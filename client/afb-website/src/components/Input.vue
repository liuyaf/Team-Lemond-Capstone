<template>
  <div class="input-container">
    <h3 :style="enlarge? {fontSize:'32px'}:{}">{{Content.title}}</h3>
    <el-input
      class="input"
      v-model="response"
      placeholder="Please enter your zipcode"
      type="number"
      @keyup.enter.native="$event.target.blur"
      @blur="response.length >= 5? $emit('continue-input', response, Content.questionID, Content.title):''"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "input-form",
  props: {
    Content: Object,
    enlarge: Boolean,
    oldVal: String
  },
  data() {
    return {
      response: ""
    };
  },
  activated() {
    if (
      this.oldVal !== undefined &&
      this.oldVal !== null &&
      this.oldVal.length !== 0
    ) {
      this.response = this.oldVal;
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
