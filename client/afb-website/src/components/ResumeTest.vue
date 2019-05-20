<template>
  <div class="card">
    <h2>it appears that you have unfinished test, resume?</h2>
    <div class="btn-group">
      <el-button type="danger" @click="$emit('startover')">Start Over</el-button>
      <el-button type="success" @click="$emit('resumeTest')">Resume</el-button>
      <el-button type="success" @click="$emit('del')">del</el-button>
    </div>
  </div>
</template>
<script>
export default {};
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
</style>
