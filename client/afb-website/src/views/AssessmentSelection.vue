<template>
  <div class="assessmentSelection">
    
      <!-- intro section  -->
      <div class="intro paddingSection">
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <span class="intro-h" v-html="introSection.header"></span>
            <br>
            <p class="intro-p">{{ introSection.paragraph }}</p>
          </div>

          <div class="col-sm-12 col-lg-6">
            <img
              v-bind:src="introSection.image"
              class="introImage"
              alt="6 adults sitting around a table having a meeting"
            >
          </div>
        </div>
      </div>

      <!-- how to become an age friendly business -->
      <div class="how-to-become-an-afb paddingSection">
        <hr class="testLine">
        <h3 class="textHeaders">{{ howToBecomeAfbSection.header[0] }}</h3>
        <p class="textParagraphs">{{ howToBecomeAfbSection.header[1] }}</p>
        <br>
        <div class="row pl-0">
          <AssessmentCard
            v-for="(item) in howToBecomeAfbSection.assessmentCards"
            :key="item.id"
            v-bind:content="item"
          />
        </div>
      </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import AssessmentCard from "@/components/AssessmentCard.vue";

// This component has parsed content coming from the WordPress API.
// It represents the Assessment Selection page in the landing page.
// More info about WordPress API: https://developer.wordpress.org/rest-api/
// URL to the page content on the WordPress API: https://agefriendlysea.wpengine.com/?rest_route=/wp/v2/pages/206

export default {
  name: "assessmentSelection",
  components: {
    AssessmentCard
  },
  data() {
    return {
      info: null,
      errors: [],
      parser: new DOMParser(),
      parsedHTML: null,
      introSection: {
        header: null,
        image: null,
        paragraph: null,
        button: {
          url: null,
          text: null
        }
      },
      howToBecomeAfbSection: {
        header: [],
        assessmentCards: []
      }
    };
  },
  mounted() {
    axios
      // JSON object from the WprdPress API for this page: https://agefriendlysea.wpengine.com/?rest_route=/wp/v2/pages/206
      .get("https://agefriendlysea.wpengine.com/wp-json/wp/v2/pages/206")
      .then(response => {
        // RAW HTML
        this.info = response.data.content.rendered;
        this.parsedHTML = this.parser.parseFromString(this.info, "text/html");

        // 'wp-block-media-text' alignwide containts contents for the first paragraph of the assessment test page
        var mediaTextBlocks = this.parsedHTML.getElementsByClassName(
          "wp-block-media-text alignwide"
        );

        // AGE FRIENDLY BUSINESS SEATTLE ASSESSMENT TEST PAGE
        // header
        this.introSection.header =
          mediaTextBlocks[0].children[1].children[0].outerHTML;
        // image
        this.introSection.image =
          mediaTextBlocks[0].children[0].children[0].src;
        // paragraph
        this.introSection.paragraph =
          mediaTextBlocks[0].children[1].children[1].innerText;

        // HOW TO BECOME AN AGE FRIENDLY BUSINESS
        // assessment routes
        var assessmentRoutes = [
          "customer-service-self-assessment",
          "employer-assessment-self-assessment"
        ];

        // headers
        var howToAfbHeaders = this.parsedHTML.getElementsByClassName(
          "how-to-afb-header"
        );
        for (var j = 0; j < howToAfbHeaders.length; j++) {
          this.howToBecomeAfbSection.header.push(howToAfbHeaders[j].innerText);
        }

        // assessment cards
        var assessmentCardsContents = this.parsedHTML.getElementsByClassName(
          "assessment-div"
        );
        for (var t = 0; t < assessmentCardsContents.length; t++) {
          var assessment = {
            headerHTML: null,
            headerText: null,
            paragraph: null,
            route: null
          };
          assessment.headerHTML =
            assessmentCardsContents[t].children[0].outerHTML;
          assessment.headerText =
            assessmentCardsContents[t].children[0].innerText;
          assessment.paragraph =
            assessmentCardsContents[t].children[1].innerHTML;
          assessment.route = assessmentRoutes[t];

          this.howToBecomeAfbSection.assessmentCards.push(assessment);
        }
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
main {
  background-color:#f8f8f8
}
.paddingSection {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
}

/* intro section */
.assessmentSelection {
  margin-top: 80px;
}

.introImage {
  width: 100%;
}

.intro-h >>> h2 {
  font-size: calc(18px + 1vw);
}

.intro-p {
  font-family: "DDINRegular";
  font-size: calc(10px + 0.8vw);
}

/*Assessment selection section*/

.testTextHeaders >>> h4 {
  font-size: calc(18px + 1vw);
}

.textParagraphs {
  font-family: "DDINRegular";
  font-size: calc(10px + 0.8vw);
}
</style>