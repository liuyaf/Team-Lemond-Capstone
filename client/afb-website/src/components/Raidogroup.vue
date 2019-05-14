<template>
  <div class="radio-group-container">
    <h3 :style="enlarge? {fontSize:'32px'}:{}">{{Content.title}}</h3>
    <div class="radio-btn-c">
      <el-radio
        v-model="radio1"
        label="yes"
        border
        class="test"
        @change="$emit('continue', radio1, Content.questionID)"
      >Yes</el-radio>
    </div>
    <div class="radio-btn-c">
      <el-radio
        v-model="radio1"
        label="no"
        border
        class="test"
        @change="$emit('continue', radio1, Content.questionID)"
      >No</el-radio>
    </div>
  </div>
</template>


<script>
export default {
  name: "radiogroup",
  props: {
    Content: Object,
    fill: String,
    enlarge: Boolean
  },
  data() {
    return {
      radio1: ""
    };
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
.test {
  color: black;
}
.radio-group-container {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.radio-btn-c {
  padding-top: 20px;
}
</style>
