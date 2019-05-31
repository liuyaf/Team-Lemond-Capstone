<template>
  <div class="input-container">
    <h3 :style="enlarge? {fontSize:'calc(20px + 1vw)'}:{}">{{Content.title}}</h3>
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
  },
  watch: {
    response: function() {
      if (this.response.length > 5) {
        this.response = this.response.slice(0, 5);
      }
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: calc(15px + 1vw);
}
.input {
  /* width: 350px !important; */
  width: 250px !important;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
