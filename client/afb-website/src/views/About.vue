<template>
  <div id="about">
    <!-- intro section -->
    <div id="mainImage" class="jumbotron jumbotron-fluid" v-bind:style="{ 'background-image': 'url('+ introSection.image +')' }">
        <div class="container">
            <div id="mainHeader">
                <span v-html="introSection.heading"></span>
                <span v-html="introSection.text"></span>

                <button class="btn introTestButton">Assessment Test &#8594;</button>
            </div>
        </div>
    </div>

    <!-- fact section -->
    <div id="facts">
        <div class="row mx-auto paddingSection">
          <div class="col-sm-12 col-md-6 d-flex" v-for="(item) in factSection" :key="item.id">
              <div class ="fact-body">
                <hr class="factLine">
                <span v-html="item.header"></span>
                <p class="fact-text"><span v-html="item.text"></span></p>
              </div>
          </div>
        </div>
    </div>

    <!-- misson section -->
    <div class="mission paddingSection">
        <div class="container-fluid row">
            <div class="col-sm-12 col-md-6 d-flex">
              <div>
                <div class="information" v-html="missionSection.paragraphs"></div>

                <button class="btn missionButton">Resource Guide &#8594;</button>
              </div>    
            </div>

            <div class="col d-flex">
                <div class="missionImage">
                    <img v-bind:src="missionSection.image">
                </div>
            </div>
        </div>
    </div>

    <!-- 5 reasons to become age friendly -->
    <div class="five-reasons paddingSection">
      <img class="five-reasons-image-header" v-bind:src="fiveReasonsHeaderImage" alt="five reasons to become age friendly">
      <MediaTextCard v-for="(item) in fiveReasonsSection" :key="item.id" v-bind:content="item"/>
    </div>

    <!-- how to become an age friendly business -->
    <div class="how-to-become-an-afb paddingSection">
      <hr class="testLine">
      <h3 class="textHeaders">{{ howToBecomeAfbSection.header[0] }}</h3>
      <p class="textParagraphs">{{ howToBecomeAfbSection.header[1] }}</p>
      <br>
      <div class="row pl-0">
        <AssessmentCard v-for="(item) in howToBecomeAfbSection.assessmentCards" :key="item.id" v-bind:content="item"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import MediaTextCard from '@/components/MediaTextCard.vue'
import AssessmentCard from '@/components/AssessmentCard.vue'

export default {
  name: 'about',
  components: { 
    MediaTextCard,
    AssessmentCard
  },
  data () {
    return {
      info: null,
      errors: [],
      parser: new DOMParser(),
      parsedHTML: null,
      divs: null,
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
      }
    }
  },
  mounted () {
    axios
    .get('https://agefriendlysea.wpengine.com/wp-json/wp/v2/pages/37')
    .then(response => {
      // RAW HTML
      this.info = response.data.content.rendered 
      this.parsedHTML = this.parser.parseFromString(this.info, 'text/html')
      this.divs = this.parsedHTML.getElementsByTagName("div")

      // INTRO SECTION
      // parsing the image src for the landing page cover
      this.introSection.image = this.parsedHTML.getElementsByClassName("wp-block-image")[0].children[0].src
      
      // parsing the content that contains the heading and the text
      this.introSection.content = this.parsedHTML.getElementsByClassName("landing-intro")
      
        // heading
        this.introSection.heading = this.introSection.content[0].firstElementChild.outerHTML
        // the text below the heading
        this.introSection.text = this.introSection.content[0].lastElementChild.outerHTML

      // FACTS SECTION
      // parsing content for the facts section of the landing page
      for (var i = 0; i < this.parsedHTML.getElementsByClassName("age-friendly-fact").length; i++) {
        var fact = {
          header: null,
          text: null
        } 
        fact.header = this.parsedHTML.getElementsByClassName("age-friendly-fact")[i].children[0].outerHTML
        fact.text = this.parsedHTML.getElementsByClassName("age-friendly-fact")[i].children[1].outerHTML
        this.factSection.push(fact)
      }


      // FIVE REASONS
      // contents for the mission section and the five reasons
      var mediaTextBlocks = this.parsedHTML.getElementsByClassName("wp-block-media-text alignwide")
      

      // grabbing the header image
      this.fiveReasonsHeaderImage = this.parsedHTML.getElementsByClassName("five-reasons-header-image")[0].children[0].src
      
      // parsing content for the mission section of the landing page
        // grabbing the image src
        this.missionSection.image = mediaTextBlocks[0].firstElementChild.children[0].src
        // grabbing the paragraph for the mission section
        this.missionSection.paragraphs = mediaTextBlocks[0].children[1].innerHTML

    
      // getting the five reasons to age friendly section 
      for (var s = 1; s <= 5; s++) {
        var reason = {
          className: null,
          bigImage: null,
          smallIcon: null,
          header: null,
          paragraph: null
        }
        reason.className = mediaTextBlocks[s].className
        reason.bigImage = mediaTextBlocks[s].children[0].children[0].src
        reason.smallIcon = mediaTextBlocks[s].children[1].getElementsByTagName("img")[0].src
        reason.header = mediaTextBlocks[s].children[1].children[1].outerHTML
        reason.paragraph = mediaTextBlocks[s].children[1].children[2].innerText

        this.fiveReasonsSection.push(reason)
      }
    

      // HOW TO BECOME AN AGE FRIENDLY BUSINESS
      // headers
      var howToAfbHeaders = this.parsedHTML.getElementsByClassName("how-to-afb-header")
      for (var j = 0; j < howToAfbHeaders.length; j++) {
        this.howToBecomeAfbSection.header.push(howToAfbHeaders[j].innerText)
      }
      
      // assessment cards
      var assessmentCardsContents = this.parsedHTML.getElementsByClassName("assessment-div")
      for (var t = 0; t < assessmentCardsContents.length; t++) {
        var assessment = {
          headerHTML:null,
          headerText: null,
          paragraph:null
        }
        assessment.headerHTML = assessmentCardsContents[t].children[0].outerHTML
        assessment.headerText = assessmentCardsContents[t].children[0].innerText
        assessment.paragraph = assessmentCardsContents[t].children[1].innerHTML
        this.howToBecomeAfbSection.assessmentCards.push(assessment)
      }

      // AGE FRIENDLY STICKER
      console.log(mediaTextBlocks[mediaTextBlocks.length-1])

    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scope>
/* general styling for the page */

.paddingSection {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
}

.btn {
  border-radius: 0;
}

p {
  font-family: 'DDINRegular';
}


/* intro content */
#mainImage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}

#mainHeader {
  color: white;
  padding-right: 10%;
  margin-top: 25%;
  margin-right: 40%;
}

.introTestButton {
  border: 2px solid white;
  color: white;
}

#mainHeader > span > p {
  font-family: "Fjalla One";
}


/* fact content */
.factLine {
  height: 6px;
  background-color: #bbc437;
  border: none;
  max-width: 25%;
  text-align: left;
  margin-left: 0;
}

#facts div div div span h3 span {
  color: #cc3e16;
  font-size: 4.4vw;
}

.fact-text {
  font-family: 'DDINRegular';
}


/* mission content */
.mission {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  display: inline-block;
  position: relative;
  background-color: #f8f8f8;
}

.missionImage {
  overflow: hidden;
  margin-top: auto;
  margin-bottom: auto;
}

.missionButton {
  border: 2px solid red;
  color: red;
}

.missionImage img {
  display:block; /*remove inline-block spaces*/
  width:100%; /*make image streatch*/
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
  background-color:#f8f8f8;
}

.testLine {
  height: 6px;
  color: #155777;
  background-color: #155777;
  border: none;
  max-width: 33%;
  text-align: left;
  margin-left: 0;
}

.textHeaders {
  /* font-size: 2.1vw; */
  font-weight: 600;
}

.textParagraphs {
  font-family: 'DDINRegular';
}
</style>
