<template>
    <div class="reasonRow row mx-auto">
        <!-- big image -->
        <div v-bind:class="figureClass">
            <div class="reasonDivs">
                <img v-bind:src="content.bigImage" class="reasonDivs">
            </div>
        </div>


        <!-- rest of content -->
        <div class="col-lg-6 d-flex">
            <div class="reasons reasonDivs">
                <!-- small icon and button -->
                <div class="paddingSection container-fluid row">
                    <div class="paddingSection" v-html="content.content"></div>
                    <div class="paddingSection">
                        <DynamicButton v-bind:buttonInfo="{ color:content.buttonColor, text:'', destination:'/resources' }" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DynamicButton from '@/components/DynamicButton.vue'

export default {
    name: 'MediaTextCard',
    props: ['content'],
    components: {
        DynamicButton
    },
    computed: {
        figureClass: function() {
            return this.content.className === "wp-block-media-text alignwide has-media-on-the-right" ? 'col-lg-6 d-flex order-last' : 'col-lg-6 d-flex';
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

.textParagraphs {
    font-family: 'DDINRegular'; 
}

p {
    font-family: 'DDINRegular';
    font-size: calc(12px + .8vw);
}

ul {
    font-family: 'DDINRegular'; 
    list-style-type: initial;
    line-height: 1.5rem;
}

li {
    font-family: 'DDINRegular';
    font-size: calc(12px + .8vw);
    margin-bottom: 5px;
}

.reasonRow[data-v-039c5b43] {
    margin-top: 3%;
}

.reasons[data-v-0dcdb161] {
    box-shadow: 2px -2.5px 2px 0
        rgba(0, 0, 0, 0.15), 0 1px 2px 0
        rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    width: 100%;
    height: 100%;
}

.reasonDivs[data-v-0dcdb161] {
    width: 100%;
    height: 100%;
}

img {
    object-fit: cover;
}
</style>


