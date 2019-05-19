<template>
  <div
    class="card"
    :style="{ 'background-image': 'url(' + require(`@/assets/onboard-background.svg`) + ')'}"
  >
    <span class="skip">
      <el-button size="medium" @click="$emit('skipOnboard')">Skip</el-button>
    </span>

    <img
      class="pl-3 pr-3"
      :src="require(`@/assets/${this.currentElement.imgName}`)"
      alt="onboard image"
    >

    <div class="card-content mt-4">
      <h3 class="headline text-center">{{this.currentElement.headline}}</h3>
      <p class="text-center mt-4">{{this.currentElement.text}}</p>
    </div>

    <div class="bottom-control">
      <!-- the dot indicators -->
      <div class="row">
        <ul class="indicator pl-0 mx-auto">
          <li
            v-for="(item, index) in this.cards"
            :key="index"
            class="dot"
            :class="{'dot-selected': currentElementIndex === index}"
          >&#9679;</li>
        </ul>
      </div>

      <div class="navigation">
        <!-- back button -->
        <el-button
          v-if="this.currentElementIndex != 0"
          size="medium"
          class="onboard-button"
          @click="showPrevElement"
        >Back</el-button>

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
  </div>
</template>

<script>
export default {
  name: "OnboardCard",
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
.card {
  overflow: scroll;
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
  /* -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); */
  background-repeat: no-repeat;
  background-size: cover;
}

.skip {
  padding-left: 20px;
  padding-top: 20px;
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
  margin-left: 1%;
  margin-top: 1%;
}

img {
  height: 244px;
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

.navigation {
  display: flex;
}

.onboard-button {
  margin-right: 2%;
}

.row {
  padding-top: 45px;
  width: 100%;
}
</style>


