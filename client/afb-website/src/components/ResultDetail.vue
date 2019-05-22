<template>
  <div class="result-container" v-if="!isMobile">
    <div class="review-side">
      <h1 class="review-side-title">Review {{sectionName}} Answers</h1>
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
    <transition name="slide-fade" mode="out-in">
      <div class="cards-mobile" v-if="!displayMobileTips" key="card">
        <div class="titleAndTabs">
          <h3 class="review-side-title-mobile">Review {{sectionName}} Answers</h3>
          <div class="switch-tab-mobile" @click="mobileSwitchToTips">
            <p class="mobile-tips">Tips</p>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <ReviewCard
          v-for="(response, index) in tipsAndResponse"
          :key="index"
          :Response="response"
          :enlarge="enlarge"
          :isMobile="isMobile"
        ></ReviewCard>
        <br>
      </div>
      <div v-else key="tips">
        <div @click="mobileSwitchToTips">click bait</div>
        <div class="tips">
          <h1
            style="{fontSize: 48px}"
            :style="enlarge? {fontSize:'56px'}:{}"
          >Tips for {{sectionName}}</h1>
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
      sectionName: this.sectionTitle,
      displayMobileTips: false,
      show: true
    };
  },
  computed: {
    isMobile: function() {
      return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
    }
  },
  methods: {
    mobileSwitchToTips: function() {
      this.displayMobileTips = !this.displayMobileTips;
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
.mobile-tips {
  display: inline-block;
  border-bottom: 1px solid #1f1f1f;
}
.titleAndTabs {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 95%;
}
.review-side-title-mobile {
  font-size: 24px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
