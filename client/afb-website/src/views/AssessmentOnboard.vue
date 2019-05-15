<template>
  <div class="onboard-container">
    <!-- the card with onboard contents -->
    <OnboardCard
      @skipOnboard="$emit('skipOnboard')"
      class="current-element"
      :headline="currentElement.headline"
      :text="currentElement.text"
      :imgName="currentElement.imgName"
    />
    <div class="container row mt-3 mb-3 mx-auto">
      <!-- back button -->
      <el-button
        v-if="this.currentElementIndex != 0"
        size="medium"
        class="onboard-button"
        @click="showPrevElement"
      >Back</el-button>

      <!-- the dot indicators -->
      <div class="col row">
        <ul class="indicator pl-0 mx-auto">
          <li
            v-for="(item, index) in this.cards"
            :key="index"
            class="dot"
            :class="{'dot-selected': currentElementIndex === index}"
          >&#9679;</li>
        </ul>
      </div>

      <!-- the next button -->
      <el-button
        v-if="this.currentElementIndex != this.cards.length-1"
        size="medium"
        class="onboard-button ml-auto"
        @click="showNextElement"
      >Next</el-button>

      <!-- the start button that shows on the last onboard card -->
      <el-button
        @click="$emit('skipOnboard')"
        v-if="this.currentElementIndex == this.cards.length-1"
        size="medium"
        class="onboard-button ml-auto"
      >Start</el-button>
    </div>
  </div>
</template>

<script>
import OnboardCard from "@/components/OnboardCard.vue";

export default {
  name: "assessmentOnboard",
  components: {
    OnboardCard
  },
  data() {
    return {
      currentElementIndex: 0,
      cards: [
        {
          cardId: 1,
          headline: "Welcome to the Assessment",
          text:
            "There are many age-friendly practices that many business leaders miss. Take our assessment to find out if your business applies age-friendly practices!",
          imgName: "onboard-image-1.svg"
        },
        {
          cardId: 2,
          headline: "During the Assessment...",
          text:
            "You will first answer three basic business question. Then, you will need to complete multiple sets of questions about age-friendly practices. This Assessment will take roughly about 15 minutes to complete.",
          imgName: "onboard-image-2.svg"
        },
        {
          cardId: 3,
          headline: "After completing the Assessment...",
          text:
            "After submitting your assessment, you will get a final score, along with relevant age-friendly tips. If you would like to keep your result and tips, be sure to hit the download button on the result page.",
          imgName: "onboard-image-3.svg"
        }
      ]
    };
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
    }
  },
  methods: {
    showNextElement() {
      this.currentElementIndex++;
    },
    showPrevElement() {
      this.currentElementIndex--;
    }
  }
};
</script>

<style scoped>
.onboard-container {
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 94%;
  max-height: 80%;
  margin: auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.el-button {
  font-family: "DDINRegular";
}

.indicator li {
  display: inline;
  margin-left: 3px;
  margin-right: 3px;
}

.dot {
  color: lightgray;
}

.dot-selected {
  color: black;
}
</style>
