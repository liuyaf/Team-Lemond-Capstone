<template>
    <div class="paddingSection testBoxes col-lg-6 d-flex">
        <div>
            <span class="testTextHeaders" v-html="content.headerHTML"></span>
            <hr class="testHeaderLine">
            <br>
            <p class="textParagraphs" v-html="content.paragraph"></p>
            <br>
            <br>
            <DynamicButton v-bind:buttonInfo="{ color: '#CC3E16', text:buttonText, destination:'/' + content.route }"/>
        </div>
    </div>
</template>

<script>
import DynamicButton from '@/components/DynamicButton.vue'

export default {
    name: 'AssessmentCard',
    props: ['content'],
    components: {
        DynamicButton
    },
    computed: {
        buttonText: function() {
            return this.content.headerText
        }
    }
}
</script>

<style scoped>
.paddingSection {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
    padding-bottom: 3%;
}
</style>


