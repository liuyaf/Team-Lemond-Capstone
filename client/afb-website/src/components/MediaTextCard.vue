<template>
  <div class="reasonRow row mx-auto">
    <!-- big image -->
    <div v-bind:class="figureClass">
      <div class="reasonDivs">
        <img v-bind:src="content.bigImage" class="reasonDivs">
      </div>
    </div>

    <!-- rest of content -->
    <div class="col-lg-6 d-flex">
      <div class="reasons reasonDivs">
        <!-- small icon and button -->
        <div class="paddingSection container-fluid row">
          <div :class="{ reasonEnlarge: enlargeFont }" class="mediaContent paddingSection" v-html="content.content"></div>
          <div class="paddingSection">
            <DynamicButton
              v-bind:buttonInfo="{ color:content.buttonColor, text: '', destination:'/resources', isUrl: false}"
            ></DynamicButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicButton from "@/components/DynamicButton.vue";

// This component receives props that were parsed from the Wordpress API
// See About.vue to see how the contents were parsed

// Components that use it:
//  - About.vue

export default {
  name: "MediaTextCard",
  props: ["content", "enlargeFont"],
  components: {
    DynamicButton
  },
  computed: {
    figureClass: function() {
      return this.content.className ===
        "wp-block-media-text alignwide has-media-on-the-right"
        ? "col-lg-6 d-flex order-last"
        : "col-lg-6 d-flex";
    }
  }
};
</script>

<style scoped>
.paddingSection {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
}

.mediaContent >>> h3 {
  font-size: calc(18px + 1vw);
}

.mediaContent >>> p {
  font-family: "DDINRegular";
  font-size: calc(10px + 0.8vw);
}

.mediaContent >>> ul {
  font-family: "DDINRegular";
  list-style-type: initial;
  font-size: calc(10px + 0.8vw);
  line-height: 2rem;
}

@media(max-width: 991px) {
  .mediaContent >>> ul {
    line-height: 1.5rem;
  }
}

.reasonEnlarge >>> h3 { /* on enlarge button */
  font-size: calc(30px + 1vw);
}

.reasonEnlarge >>> ul { /* on enlarge button */
  font-size: calc(15px + 0.8vw);
  line-height: 2.5rem;
} 

.reasonEnlarge >>> p { /* on enlarge button */
  font-size: calc(15px + 0.8vw);
}

.reasonRow {
  margin-top: 3%;
}

.reasons {
  box-shadow: 2px -2.5px 2px 0 rgba(0, 0, 0, 0.15),
    0 1px 2px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}

.reasonDivs {
  width: 100%;
  height: 100%;
}

img {
  object-fit: cover;
}
</style>


