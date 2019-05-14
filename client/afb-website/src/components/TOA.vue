<template>
  <div>
    <div v-for="(x, index) in TOAContent" :key="index">
      <h3 :style="enlarge? {fontSize:'32px'}:{}" class="text-center">{{x.title}}</h3>
      <p
        :style="enlarge? {fontSize:'28px'}:{}"
        class="toa-container text-center"
        v-html="x.content"
      ></p>
    </div>
    <div class="text-center confirm" :style="enlarge? {fontSize:'28px'}:{}">
      <input
        class="confirm-text"
        type="radio"
        name="agree"
        id="agree-radio"
        value="agreed"
        v-model="selected"
      >
      <label for="agree-radio">I have read and agree with the information above.</label>
      <el-button size="mini" :disabled="!selected" @click="$emit('continue')">start</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "toa",
  props: {
    TOAContent: Array,
    enlarge: Boolean
  },
  data() {
    return {
      selected: false
    };
  }
};
</script>

<style scoped>
.toa-container {
  padding-left: 40px;
  padding-right: 40px;
}
.confirm {
  align-items: center;
}
</style>


