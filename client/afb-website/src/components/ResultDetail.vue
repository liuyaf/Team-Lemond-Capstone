<template>
  <div class="result-container">
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
    </div>
    <div class="tips">
      <h1 style="{fontSize: 48px}" :style="enlarge? {fontSize:'56px'}:{}">Tips for {{sectionName}}</h1>
      <div class="tips-detail" v-for="tip in tipsObj" :key="tip.tipsTitle">
        <h3 class="tips-title">{{tip.tipsTitle}}</h3>
        <ul>
          <li class="tips-li" v-for="(tipLi, index) in tip.tipsLi" :key="index">{{tipLi}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ReviewCard from "./ReviewCard";
export default {
  name: "result-detail",
  components: {
    ReviewCard
  },
  props: {
    color: String,
    TipsAndResponse: Array,
    sectionTitle: String,
    enlarge: Boolean
  },
  data() {
    return {
      tipsAndResponse: this.TipsAndResponse,
      sectionName: this.sectionTitle,
      tipsObj: [
        {
          tipsTitle: "Recruit Effectively",
          tipsLi: [
            "Ensure that your HR staff is aware of the benefits of hiring mature workers.",
            "Include older workers on recruitment teams and hiring panels.",
            "Reach out to recently retired workers when you need consultants, part-time workers,project-based employees, or “on-call” staff."
          ]
        },
        {
          tipsTitle: "Retain mature workers",
          tipsLi: [
            "Assess your company and your workforce. What percent of your organization is age 50 or older? How will retirements impact your business? How will you fill potential knowledge gaps?",
            "Ask your employees! Survey employees who are age 50+ to learn what motivates them on the job (e.g., friendly work environment, ability to apply their expertise or experiences, staying engaged, having a flexible work schedule, health care benefits, pay)."
          ]
        },
        {
          tipsTitle: "Provide trainings and learning opportunities",
          tipsLi: [
            "Train staff about age-related biases and intergenerational workplace awareness issues. Include age topics in your diversity trainings.",
            "Offer skills training and lifelong learning opportunities of interest to all ages, including programs that are attractive to mature workers.",
            "• Provide opportunities for mature workers to share and contribute knowledge to the business (e.g., initiate mentoring programs or peer trainings that pair older and younger employees)."
          ]
        }
      ]
    };
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
  min-width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f7fe;
  min-height: 1000px;
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
</style>
