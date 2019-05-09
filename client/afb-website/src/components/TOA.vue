<template>
  <div>
    <div v-for="(x, index) in TOAContent" :key="index">
      <h2 class="text-center">{{x.title}}</h2>
      <p class="toa-container text-center" v-html="x.content"></p>
    </div>
    <div class="text-center">
      <input type="radio" name="agree" id="agree-radio" value="agreed" v-model="selected">
      <label for="agree-radio">I have read and agree with the information above.</label>
      <button :disabled="!selected" @click="$emit('continue')">start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "toa",
  props: {
    TOAContent: Array
  },
  data() {
    return {
      selected: false
    };
  }
};
</script>

<style>
.toa-container {
  padding-left: 40px;
  padding-right: 40px;
}
</style>


