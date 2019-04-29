<template>
  <div class="resources">
      {{ errors }}
      {{ parsedHTML }}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'resources',
  data () {
    return {
      info: null,
      errors: [],
      parser: new DOMParser(),
      parsedHTML: null
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


      console.log(this.parsedHTML)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scope>
.resources {
  padding-top: 80px;
}
</style>
