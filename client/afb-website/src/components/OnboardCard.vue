<template>
  <div
    class="card"
    :style="{ 'background-image': 'url(' + require(`@/assets/onboard-background.svg`) + ')'}"
  >
    <span class="skip">
      <el-button size="medium" @click="$emit('skipOnboard')">Skip</el-button>
    </span>

    <img class="pl-3 pr-3" :src="require(`@/assets/${imgName}`)" alt="onboard image">

    <div class="card-content mt-5">
      <h3 class="headline text-center">{{headline}}</h3>
      <p class="text-center mt-5">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnboardCard",
  props: {
    headline: String,
    imgName: String,
    text: String
  }
};
</script>

<style scoped>
.card {
  overflow: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 90%;
  max-height: 84%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  font-family: "DDINRegular";
  font-size: 24px;
  /* -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); */
  background-repeat: no-repeat;
  background-size: cover;
}

.headline {
  font-weight: bold;
}

.card-image {
  margin-top: 30px;
}

.card-content {
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 2%;
}

.skip {
  margin-left: 2%;
  margin-top: 2%;
}
img {
  height: 244px;
}
</style>


