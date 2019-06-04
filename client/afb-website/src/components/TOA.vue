<template>
  <div class="toa-div">
    <div v-for="(x, index) in TOAContent" :key="index">
      <h3 :style="enlarge? {fontSize:'calc(20px + 1vw)'}:{}" class="text-center">{{x.title}}</h3>
      <p
        :style="enlarge? {fontSize:'calc(20px + 0.8vw)'}:{}"
        class="toa-container text-center"
        v-html="x.content"
      ></p>
    </div>
    <div class="text-center confirm" :style="enlarge? {fontSize:'calc(20px + 0.8vw)'}:{}">
      <div class="radio-text" :style="enlarge? {fontSize:'calc(20px + 0.8vw)'}:{}">
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
.toa-div {
  margin-top: 20px;
}
h3 {
  font-weight: bold;
  font-size: calc(15px + 1vw);
}
p {
  font-size: calc(15px + 0.8vw);
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
  font-size: calc(15px + 0.8vw);
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
