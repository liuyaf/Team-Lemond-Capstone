<template>
  <div class="result-container" v-if="!isMobile">
    <div class="review-side">
      <h1 class="review-side-title">Review {{sectionName}} Answers</h1>
      <!-- <ReviewCard v-for="(tip, index) in tips" :key="index"
      :correct=></ReviewCard>-->
      <ReviewCard
        v-for="(response, index) in tipsAndResponse"
        :key="index"
        :Response="response"
        :enlarge="enlarge"
      ></ReviewCard>
      <br class="white-space">
    </div>
    <div class="tips">
      <h1 style="{fontSize: 48px}" :style="enlarge? {fontSize:'56px'}:{}">Tips for {{sectionName}}</h1>
      <div class="tips-detail" v-for="tip in generalTips" :key="tip.tipsTitle">
        <h3 class="tips-title" :style="enlarge? {fontSize:'32px'}:{}">{{tip.tipsTitle}}</h3>
        <ul>
          <li
            class="tips-li"
            v-for="(tipLi, index) in tip.tipsLi"
            :key="index"
            :style="enlarge? {fontSize:'24px'}:{}"
          >{{tipLi}}</li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <transition>
      <div class="cards-mobile">
        <h1 class="review-side-title">Review {{sectionName}} Answers</h1>
        <ReviewCard
          v-for="(response, index) in tipsAndResponse"
          :key="index"
          :Response="response"
          :enlarge="enlarge"
          :isMobile="isMobile"
        ></ReviewCard>
        <br>
      </div>
    </transition>
  </div>
</template>
<script>
import ReviewCard from "./ReviewCard";
export default {
  name: "result-detail",
  components: {
    ReviewCard
  },
  props: ["color", "TipsAndResponse", "sectionTitle", "enlarge", "generalTips"],
  data() {
    return {
      tipsAndResponse: this.TipsAndResponse,
      sectionName: this.sectionTitle
    };
  },
  computed: {
    isMobile: function() {
      return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
    }
  }
};
</script>
<style scoped>
.result-container {
  min-height: 1000px;
  display: flex;
  font-family: "DDINRegular";
}
.review-side {
  min-width: 400px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f7fe;
  min-height: 1000px;
}

.cards-mobile {
  background: #f5f7fe;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.review-side-title {
  padding-left: 20px;
  padding-top: 20px;
  font-size: 36px;
  margin-bottom: 0;
}
.tips {
  /* display: flex; */
  padding-left: 25px;
  justify-content: center;
  flex-grow: 1;
}

.tips-detail {
  margin-top: 30px;
}

.tips-li {
  text-align: left;
}
/* .white-space {
  display: block;
  margin-bottom: 50px;
} */
</style>
