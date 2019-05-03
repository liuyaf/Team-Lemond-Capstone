<template>
  <div>
    <h3>{{Content.title}}</h3>
    <div>
      <el-radio
        v-model="radio1"
        label="yes"
        border
        class="test"
        @change="$emit('continue', radio1, Content.questionID)"
      >Yes</el-radio>
    </div>

    <br>
    <!-- <br> -->
    <div>
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
    Content: Object
  },
  data() {
    return {
      radio1: ""
    };
  }
};
</script>

<style>
.test {
  color: black;
}
</style>
