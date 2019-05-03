<template>
  <div>
    <div class="review-side">
      <!-- review answers -->
      <ReviewCard></ReviewCard>
    </div>
    <div class="tips">tips</div>
  </div>
</template>
<script>
import ReviewCard from "./ReviewCard";
export default {
  name: "result-detail",
  components: {
    ReviewCard
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.review-side {
  width: 450px;
  display: flex;
  justify-content: center;
}
</style>
