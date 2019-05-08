<template>
  <div id="resources">
    <!-- NavBar-->
    <NavBar/>

    <main>
      <!-- intro section  -->
      <div class="intro paddingSection">
        <div class="row">
            <div class="col-sm-12 col-lg-6">
              <span v-html="introSection.header"></span>
              <br>
              <p>{{ introSection.paragraph }}</p>
              <DynamicUrlButton class="mb-4" v-bind:buttonInfo="{ color:'#155777', text: introSection.button.text, Url: introSection.button.url }"/>
            </div>
            
            <div class="col-sm-12 col-lg-6">
                <img v-bind:src="introSection.image" class="introImage" alt="Mission Image: Young man greeting older adult in a wheel chair">
            </div>
        </div>
      </div>

      <!-- Age Friendly Seattle and Age Friendly Business Seattle -->
      <div class="age-friendly paddingSection">
        <div class="row">
          <div class="col-sm-12 col-lg-6 mt-5" v-for="(item) in ageFriendlyTextBlocks" :key="item.id">
            <span v-html="item.header"></span>
            <hr class="headerLine">
            <p>
              {{ item.paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- five reasons to be age friendly -->
      <div class="five-reasons-to-become-afb paddingSection">
        <span v-html="fiveReasonsSection.header"></span>
        <hr class="headerLine">

        <ReasonCard class="content" v-for="(item) in fiveReasonsSection.reasonContents" :key="item.id" v-bind:content="item"/>
      </div>

      <!-- download button -->
      <div class="row paddingSection">
        <DynamicUrlButton class="mb-4 mx-auto" v-bind:buttonInfo="{ color:'#155777', text: downloadResGuide.text, Url: downloadResGuide.url }"/>
      </div>
    </main>

    <!-- Footer -->
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReasonCard from '@/components/ReasonCard.vue'
import DynamicUrlButton from '@/components/DynamicUrlButton.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'resources',
  components: {
    ReasonCard,
    DynamicUrlButton,
    NavBar,
    Footer
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
        }
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
      this.introSection.image = mediaTextBlocks[0].children[0].children[0].src
      // paragraph
      this.introSection.paragraph = mediaTextBlocks[0].children[1].children[1].innerText
      // button
      this.introSection.button.text = WPbuttons[0].innerText
      this.introSection.button.url = WPbuttons[0].attributes[1].nodeValue
      



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
          className: null,
          image: null,
          content: null
        }

        card.className = mediaTextBlocks[j].className
        card.image = mediaTextBlocks[j].children[0].children[0].src
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
.paddingSection {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
}

p {
  font-family: 'DDINRegular';
}

.content[data-v-f0542a4a] >>> ul {
  font-family: 'DDINRegular';
}

.content[data-v-f0542a4a] >>> p {
  font-family: 'DDINRegular';
}


/* intro section */
#resources {
  margin-top: 114px;
}

.introImage {
  width: 100%;
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
