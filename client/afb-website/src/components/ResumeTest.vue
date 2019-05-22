<template>
  <div class="card">
    <div class="flex-container" v-if="!isPreviousTestFinished">
      <h2>It appears that you have unfinished {{testType}} test, resume?</h2>
      <div class="btn-group">
        <el-button type="danger" @click="$emit('startover')">Start Over</el-button>
        <el-button type="success" @click="$emit('resumeTest')">Resume</el-button>
      </div>
    </div>
    <div v-else class="flex-container">
      <h2>It appears that you have finished {{testType}} test. Do you want to view result?</h2>
      <div class="btn-group">
        <el-button type="danger" @click="$emit('startover')">No</el-button>
        <el-button type="success" @click="$emit('viewPreviousResult')">Yes</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "resume",
  props: {
    testType: String,
    Result: Boolean
  },
  data() {
    return {
      isPreviousTestFinished: this.Result
    };
  },
  mounted() {}
};
</script>

<style scoped>
.card {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 90%;
  max-height: 84%;
  margin: auto;
  position: absolute;
  font-family: "DDINRegular";
  font-size: 24px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  display: flex;

  justify-content: center;
  align-items: center;
}
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
