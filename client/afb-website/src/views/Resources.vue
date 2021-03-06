<template>
  <div id="resources">
    
      <!-- intro section  -->
      <a id="resource-1"></a>
      <div class="intro paddingSection">
        <div class="row">
            <div class="col-sm-12 col-lg-6">
              <span 
                :class="{ introEnlarge: enlargeFont }"
                class="intro-h" 
                v-html="introSection.header"
              ></span>
              <br>
              <p 
                :class="{ introEnlarge: enlargeFont }"
                class="intro-p"
              >{{ introSection.paragraph }}</p>
              <DynamicUrlButton :enlargeFont="enlargeFont" class="mb-4" v-bind:buttonInfo="{ color:'#155777', text: introSection.button.text, Url: introSection.button.url }"/>
              <p 
                :class="{ introEnlarge: enlargeFont }"
                class="intro-p" 
                v-html="introSection.paragraph2">
              </p>
            </div>
            <div class="col-sm-12 col-lg-6">
                <img v-bind:src="introSection.image" class="introImage" alt="5 adults sitting and smiling at the camera">
            </div>
        </div>
      </div>
      
      <!-- Age Friendly Seattle and Age Friendly Business Seattle -->
      <a id="resource-2"></a>
      <div class="age-friendly paddingSection2">
        <div class="row">
          <div class="col-sm-12 col-lg-6" v-for="(item) in ageFriendlyTextBlocks" :key="item.id">
            <span 
              :class="{ agefriendlyEnlarge: enlargeFont }"
              v-html="item.header"
            ></span>
            <hr class="headerLine">
            <p 
              :class="{ introEnlarge: enlargeFont }"
              class="intro-p">
              {{ item.paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- five reasons to be age friendly -->
      <a id="resource-3"></a>
      <div class="five-reasons-to-become-afb paddingSection2">
        <span 
          :class="{ agefriendlyEnlarge: enlargeFont }"
          v-html="fiveReasonsSection.header"
        ></span>
        <hr class="headerLine">

        <ReasonCard 
          :enlargeFont="enlargeFont"
          class="content" 
          v-for="(item) in fiveReasonsSection.reasonContents" 
          :key="item.reasonId" 
          :content="item"/>
      </div>

      <!-- download button -->
      <div class="row paddingSection">
        <DynamicUrlButton :enlargeFont="enlargeFont" class="mb-4 mx-auto" v-bind:buttonInfo="{ color:'#155777', text: downloadResGuide.text, Url: downloadResGuide.url }"/>
      </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReasonCard from '@/components/ReasonCard.vue'
import DynamicUrlButton from '@/components/DynamicUrlButton.vue'

// This component has parsed content coming from the WordPress API.
// It represents the Resources page in the landing page.
// More info about WordPress API: https://developer.wordpress.org/rest-api/
// URL to the page content on the WordPress API: https://agefriendlysea.wpengine.com/?rest_route=/wp/v2/pages/30

export default {
  name: 'resources',
  props: ['enlargeFont'],
  components: {
    ReasonCard,
    DynamicUrlButton
  },
  data () {
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
        },
        paragraph2: null
      },
      ageFriendlyTextBlocks: [],
      fiveReasonsSection: {
        header: null,
        reasonContents: []
      },
      downloadResGuide: {
        url: null,
        text: null
      }
    }
  },
  mounted () {
    axios
    // JSON object from the WprdPress API for this page: https://agefriendlysea.wpengine.com/?rest_route=/wp/v2/pages/30
    .get('https://agefriendlysea.wpengine.com/wp-json/wp/v2/pages/30')
    .then(response => {
      // RAW HTML
      this.info = response.data.content.rendered
      this.parsedHTML = this.parser.parseFromString(this.info, 'text/html')



      // 'wp-block-media-text' alignwide containts contents for the first paragraph of the resources guide and the five reasons to become an age friendly business
      var mediaTextBlocks = this.parsedHTML.getElementsByClassName('wp-block-media-text alignwide')

      // buttons that are part of the page
      var WPbuttons = this.parsedHTML.getElementsByClassName("wp-block-button__link")


      // AGE FRIENDLY BUSINESS SEATTLE RESOURCE GUIDE
      // header
      this.introSection.header = mediaTextBlocks[0].children[1].children[0].outerHTML
      // image
      this.introSection.image = mediaTextBlocks[0].children[0].children[0].src.replace(/^http:\/\//i, 'https://')
      // paragraph
      this.introSection.paragraph = mediaTextBlocks[0].children[1].children[1].innerText
      // button
      this.introSection.button.text = WPbuttons[0].innerText
      this.introSection.button.url = WPbuttons[0].attributes[1].nodeValue
      // second paragraph after the download button
      this.introSection.paragraph2 = mediaTextBlocks[0].children[1].children[3].innerHTML      
      

      // AGE FRIENDLY SEATTLE AND AGE FRIENDLY BUSINESS SEATTLE
      // tags with class name 'resource-header' contains the header "Age Friendly Seattle", "Age Friendly Business Seatlle", and "5 Reasons to be Age Friendly"
      var headers = this.parsedHTML.getElementsByClassName('resource-header')

      // tags with class name 'resource-paragraph' contains the paragraph for the header "Age Friendly Seattle" and "Age Friendly Business Seattle"
      var paragraphs = this.parsedHTML.getElementsByClassName('resource-paragraph')

      for (var i = 0; i < 2; i++) {
        var textBlock = {
          header: null,
          paragraph: null
        }
        textBlock.header = headers[i].outerHTML
        textBlock.paragraph = paragraphs[i].innerText

        this.ageFriendlyTextBlocks.push(textBlock)
      }

      // 5 REASONS TO BE AGE FRIENDLY
      this.fiveReasonsSection.header = headers[headers.length-1].outerHTML

      for (var j = 1; j < mediaTextBlocks.length; j++) {
        var card = {
          reasonId: null,
          className: null,
          image: null,
          content: null
        }

        card.reasonId = 'reason-' + j
        card.className = mediaTextBlocks[j].className
        card.image = mediaTextBlocks[j].children[0].children[0].src.replace(/^http:\/\//i, 'https://')
        card.content = mediaTextBlocks[j].children[1].innerHTML

        this.fiveReasonsSection.reasonContents.push(card)
      }


      // Download Resource Guide button
      this.downloadResGuide.text = WPbuttons[1].innerText
      this.downloadResGuide.url = WPbuttons[1].attributes[1].nodeValue
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
/* general styling on the resource guide page */
#resources {
  margin-top: 100px;
}

.paddingSection {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
}

.paddingSection2 {
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 3%;
}

.intro-p, .content >>> .reasonContent p, .content >>> .reasonContent ul {
  font-family: 'DDINRegular';
  font-size: calc(10px + .8vw);
}

.content >>> .reasonContent h3 {
  font-size: calc(18px + 1vw);
}

.agefriendlyEnlarge >>> .resource-header { /* on enlarge button */
  font-size: calc(24px + 1vw);
}

/* intro section */
.introImage {
  width: 100%;
}

.intro-h >>> h2 {
  font-size: calc(18px + 1vw);
}

.introEnlarge >>> h2 { /* on enlarge button */
  font-size: calc(30px + 1vw);
}

.introEnlarge.intro-p { /* on enlarge button */
  font-size: calc(15px + 0.8vw);
}


/* the line that lies under the header */
.headerLine {
  height: 6px;
  background-color: #bbc437;
  border: none;
  max-width: 25%;
  text-align: left;
  margin-left: 0;
}
</style>
