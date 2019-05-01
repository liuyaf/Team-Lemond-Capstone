<template>
    <div class="fact-section" v-html="info.data.content.rendered"></div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FactSection',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
        // grabbed from the Wordpress REST API
        // It is a post titled "age-friendly facts" with an id:23
        .get('https://agefriendlysea.wpengine.com/wp-json/wp/v2/posts/23')
        .then(response => (this.info = response))
    }
}
</script>

