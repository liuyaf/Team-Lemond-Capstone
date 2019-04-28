<template>
    <div class="col-lg-6 d-flex">
        <div class="testBoxes paddingSection">
            <!-- <h2 class="testTextHeaders">Customer Service Self Assessment</h2> -->
            <span class="testTextHeaders" v-html="content.headerHTML"></span>
            <hr class="testHeaderLine">
            <br>
            <p class="textParagraphs" v-html="content.paragraph"></p>
            <br>
            <br>
            <!-- <img src="img/csTestBtn.svg" class="svgButton"> -->
            <button class="btn testButton">{{ buttonText }} &#8594;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AssessmentCard',
    props: ['content'],
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

.testButton {
    border: 2px solid red;
    color: red;
}
</style>


