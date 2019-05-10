<template>
  <div id="about">
    <!-- navbar -->
    <NavBar/>

    <main>
      <!-- intro section -->
      <div
        class="mainImage jumbotron jumbotron-fluid"
        v-bind:style="{ 'background-image': 'url('+ introSection.image +')' }"
      >
        <div class="container mx-0">
          <div class="mainHeader">
            <div class="col-xl-8 col-lg-9 col-md-11">
              <span class="intro-h" v-html="introSection.heading"></span>
            </div>
            <div class="col-lg-12 col-md-12 mt-3">
              <span class="intro-p" v-html="introSection.text"></span>
            </div>
            <div class="col-lg-7 col-md-8 mt-3">
              <DynamicButton
                v-bind:buttonInfo="{ color: 'white', text:'Assessment Test', destination:'/#' }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- fact section -->
      <div class="facts">
        <div class="row mx-auto paddingSection">
          <div class="col-sm-12 col-md-6 d-flex" v-for="(item) in factSection" :key="item.id">
            <div class="fact-body">
              <hr class="factLine">
              <span class="fact-h" v-html="item.header"></span>
              <!-- <p><span v-html="item.text"></span></p> -->
              <p class="fact-p">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- misson section -->
      <div class="mission paddingSection">
        <div class="row mx-auto">
          <div class="col-sm-12 col-md-6">
            <div>
              <div class="missionContent" v-html="missionSection.paragraphs"></div>
              <DynamicButton
                class="mb-4"
                v-bind:buttonInfo="{ color:'#CC3E16', text:'Resource Guide', destination:'/#' }"
              />
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="missionImage">
              <img v-bind:src="missionSection.image">
            </div>
          </div>
        </div>
      </div>

      <!-- 5 reasons to become age friendly -->
      <div class="five-reasons paddingSection">
        <img
          class="five-reasons-image-header"
          v-bind:src="fiveReasonsHeaderImage"
          alt="five reasons to become age friendly"
        >
        <MediaTextCard v-for="(item) in fiveReasonsSection" :key="item.id" v-bind:content="item"/>
      </div>

      <!-- how to become an age friendly business -->
      <div class="how-to-become-an-afb paddingSection">
        <hr class="testLine">
        <h3 class="textHeaders">{{ howToBecomeAfbSection.header[0] }}</h3>
        <p class="textParagraphs">{{ howToBecomeAfbSection.header[1] }}</p>
        <br>
        <div class="row mx-auto">
          <AssessmentCard
            v-for="(item) in howToBecomeAfbSection.assessmentCards"
            :key="item.id"
            v-bind:content="item"
          />
        </div>
      </div>

      <!-- apply for sticker -->
      <div class="apply-for-sticker paddingSection">
        <ApplyStickerCard v-bind:content="applyStickerSection"/>
      </div>
    </main>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MediaTextCard from "@/components/MediaTextCard.vue";
import AssessmentCard from "@/components/AssessmentCard.vue";
import DynamicButton from "@/components/DynamicButton.vue";
import ApplyStickerCard from "@/components/ApplyStickerCard.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "about",
  components: {
    MediaTextCard,
    AssessmentCard,
    DynamicButton,
    ApplyStickerCard,
    NavBar,
    Footer
  },
  data() {
    return {
      info: null,
      errors: [],
      parser: new DOMParser(),
      parsedHTML: null,
      introSection: {
        image: null,
        heading: null,
        text: null,
        content: null
      },
      factSection: [],
      missionSection: {
        image: null,
        paragraphs: null
      },
      fiveReasonsHeaderImage: null,
      fiveReasonsSection: [],
      howToBecomeAfbSection: {
        header: [],
        assessmentCards: []
      },
      applyStickerSection: {
        header: null,
        image: null,
        paragraph: null
      }
    };
  },
  mounted() {
    axios
      // JSON object from the WprdPress API for this page: https://agefriendlysea.wpengine.com/?rest_route=/wp/v2/pages/37
      .get("https://agefriendlysea.wpengine.com/wp-json/wp/v2/pages/37")
      .then(response => {
        // RAW HTML
        this.info = response.data.content.rendered;
        this.parsedHTML = this.parser.parseFromString(this.info, "text/html");

        // INTRO SECTION
        // parsing the image src for the landing page cover
        this.introSection.image = this.parsedHTML.getElementsByClassName(
          "wp-block-image"
        )[0].children[0].src;

        // parsing the content that contains the heading and the text
        this.introSection.content = this.parsedHTML.getElementsByClassName(
          "landing-intro"
        );

        // heading
        this.introSection.heading = this.introSection.content[0].firstElementChild.outerHTML;
        // the text below the heading
        this.introSection.text = this.introSection.content[0].lastElementChild.outerHTML;

        // FACTS SECTION
        // parsing content for the facts section of the landing page
        for (
          var i = 0;
          i <
          this.parsedHTML.getElementsByClassName("age-friendly-fact").length;
          i++
        ) {
          var fact = {
            header: null,
            text: null
          };
          fact.header = this.parsedHTML.getElementsByClassName(
            "age-friendly-fact"
          )[i].children[0].outerHTML;
          fact.text = this.parsedHTML.getElementsByClassName(
            "age-friendly-fact"
          )[i].children[1].innerText;
          this.factSection.push(fact);
        }

        // contents for the mission section and the five reasons
        var mediaTextBlocks = this.parsedHTML.getElementsByClassName(
          "wp-block-media-text alignwide"
        );

        // MISSION
        // parsing content for the mission section of the landing page
        // grabbing the image src
        this.missionSection.image =
          mediaTextBlocks[0].firstElementChild.children[0].src;
        // grabbing the paragraph for the mission section
        this.missionSection.paragraphs =
          mediaTextBlocks[0].children[1].innerHTML;

        // FIVE REASONS
        // grabbing the header image
        this.fiveReasonsHeaderImage = this.parsedHTML.getElementsByClassName(
          "five-reasons-header-image"
        )[0].children[0].src;

        // getting the five reasons to age friendly section
        var reasonCardColors = [
          "#CC3E16",
          "#BBC437",
          "#EAA74B",
          "#6EAD94",
          "#155777"
        ];

        for (var s = 1; s <= 5; s++) {
          var reason = {
            className: null,
            bigImage: null,
            buttonColor: null,
            content: null
          };
          reason.className = mediaTextBlocks[s].className;
          reason.bigImage = mediaTextBlocks[s].children[0].children[0].src;
          reason.buttonColor = reasonCardColors[s - 1];
          reason.content = mediaTextBlocks[s].children[1].innerHTML;
          this.fiveReasonsSection.push(reason);
        }

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

        // AGE FRIENDLY STICKER
        // parsing content for teh apply for sticker section
        // header
        this.applyStickerSection.header =
          mediaTextBlocks[
            mediaTextBlocks.length - 1
          ].children[1].children[0].outerHTML;
        // image
        this.applyStickerSection.image =
          mediaTextBlocks[
            mediaTextBlocks.length - 1
          ].children[0].children[0].src;
        // paragraph
        this.applyStickerSection.paragraph =
          mediaTextBlocks[
            mediaTextBlocks.length - 1
          ].children[1].children[1].innerHTML;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
/* general styling for the page */
.paddingSection {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
}

/* intro content */
.mainImage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}

.mainHeader {
  color: white;
  padding-right: 10%;
  margin-top: 275px;
  margin-left: 10%;
  margin-right: 25%;
  line-height: 1.4;
}

.intro-h >>> h2 {
  font-size: 34px;
}

.intro-p >>> p {
  font-family: "Fjalla One";
  font-size: 18px;
}

@media (max-width: 992px) {
  .mainHeader {
    margin-right: 15%;
  }
}

@media (max-width: 768px) {
  .mainHeader {
    margin-right: 0;
    padding-right: 0;
  }
}

@media (max-width: 576px) {
  .mainHeader {
    margin-top: 250px;
  }

  .intro-h >>> h2 {
    font-size: 28px;
  }

  .intro-p >>> p {
    font-size: 14px;
  }
}

/* fact content */
.factLine {
  height: 10px;
  background-color: #bbc437;
  border: none;
  max-width: 25%;
  text-align: left;
  margin-left: 0;
}

.fact-h >>> h3 {
  font-size: calc(18px + 1vw);
}

.fact-h >>> span {
  color: #cc3e16;
  font-size: calc(34px + 1vw);
}

.fact-body > p {
  font-family: "DDINRegular";
  font-size: calc(10px + .8vw);
}

/* mission content */
.mission {
  position: relative;
  background-color: #f8f8f8;
}

.missionImage img {
  display: block; /*remove inline-block spaces*/
  width: 80%; /*make image streatch*/
}


@media (max-width: 1200px) {
  .missionImage img {
    width: 100%; /*make image streatch*/
  }
  
}

@media (max-width: 771px) {
  .missionImage img {
    width: 70%; /*make image streatch*/
    margin: auto;
  }
  
}

.missionContent >>> h3 {
  font-size: calc(18px + 1vw);
}

.missionContent >>> p {
  font-family: "DDINRegular";
  font-size: calc(10px + 0.8vw);
}

/* five reasons content */
.five-reasons-image-header {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

/* how to become an age friendly business */
.how-to-become-an-afb {
  background-color: #f8f8f8;
}

.five-reasons-image-header {
  margin-top: 120px;
  margin-bottom: 120px;
}

.testLine {
  height: 10px;
  color: #155777;
  background-color: #155777;
  border: none;
  max-width: 33%;
  text-align: left;
  margin-left: 0;
}

.textHeaders {
  font-size: calc(18px + 1vw);
}

.textParagraphs {
  font-family: "DDINRegular";
  font-size: calc(10px + 0.8vw);
}

/* sticker */
.apply-for-sticker {
  background-color: #f8f8f8;
  box-shadow: -2.5px 2px 4px 0 rgba(0, 0, 0, 0.15);
}
</style>