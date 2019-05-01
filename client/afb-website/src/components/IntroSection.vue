<template>
    <div class="intro-section" v-html="info.data.content.rendered"></div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'IntroSection',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
        // grabbed from the Wordpress REST API
        // It is a post titled "landing page intro" with an id:7
        .get('https://agefriendlysea.wpengine.com/wp-json/wp/v2/posts/7')
        .then(response => (this.info = response))
    }
}
</script>
