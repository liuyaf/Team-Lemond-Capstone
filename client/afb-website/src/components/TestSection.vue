<template>
    <div>
        <div v-html="info.data.content.rendered"></div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'TestSection',
    data () {
        return {
            info : null
        }
    },
    mounted () {
        axios
        // grabbed from the Wordpress REST API
        // It is a post titled "How to Become Age-friendly Business?" with an id:27
        .get('https://agefriendlysea.wpengine.com/wp-json/wp/v2/posts/27')
        .then(response => (this.info = response))
    }
}
</script>
