<template>
  <div>
    <h3>{{Content.title}}</h3>
    <el-input
      class="input"
      v-model="response"
      placeholder="Please enter your zipcode"
      type="number"
      @keyup.enter.native="$emit('continue', response, Content.questionID)"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "input-form",
  props: {
    Content: Object
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

<style>
.input {
  width: 350px;
}
</style>
