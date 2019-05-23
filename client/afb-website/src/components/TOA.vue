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
      <div class="radio-text">
        <input type="radio" name="agree" id="agree-radio" value="agreed" v-model="selected">
        <label
          for="agree-radio"
          class="confirm-text"
        >I have read and agree with the information above.</label>
      </div>

      <el-button class="start-btn" :disabled="!selected" @click="$emit('continue')">start</el-button>
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
h3 {
  font-weight: bold;
}
.toa-container {
  padding-left: 40px;
  padding-right: 40px;
}
.confirm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.radio-text {
  display: flex;
  align-items: center;
}

.confirm-text {
  padding-left: 5px;
  margin: 0;
}
</style>


<style>
.start-btn {
  margin-top: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: #cc3e16;
  border-color: #cc3e16;
}
</style>
