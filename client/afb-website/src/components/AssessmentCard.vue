<template>
    <div class="col-lg-6 d-flex">
        <div class="testBoxes paddingSection">
            <span class="testTextHeaders" v-html="content.headerHTML"></span>
            <hr class="testHeaderLine">
            <br>
            <p class="textParagraphs" v-html="content.paragraph"></p>
            <br>
            <br>
            <DynamicButton v-bind:buttonInfo="{ color: '#CC3E16', text:buttonText, destination:'/#' }"/>
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

<style scope>
.testBoxes {
    box-shadow: -2.5px 2px 4px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    width: 100%;
    height: 100%;
}

.paddingSection {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 3%;
    padding-bottom: 3%;
}
</style>


