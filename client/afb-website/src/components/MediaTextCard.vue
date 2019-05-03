<template>
    <div class="reasonRow container-fluid row mx-auto">
        <!-- big image -->
        <div v-bind:class="figureClass">
            <div class="reasonDivs">
                <img v-bind:src="content.bigImage" class="reasonDivs">
            </div>
        </div>


        <!-- rest of content -->
        <div class="col-lg-6 d-flex">
            <div class="reasons reasonDivs">
                <!-- KEEP COMMENTED, WILL LOOK OVER AGAIN LATER -->
                <!-- small icon and button -->
                <!-- <div class="row">
                    <div class="col-6 d-flex mt-3">
                        <img v-bind:src="content.smallIcon">
                    </div>
                    <div class="buttonDiv col-3 d-flex">
                        <DynamicButton v-bind:buttonInfo="{ color:content.buttonColor, text:'', destination:'/resources' }" />
                    </div>
                </div> -->
                
                <!-- content -->
                <!-- <div id="reasonTitleButton" class="container-fluid row">
                    <div class="col-6 d-flex text-left">
                        <span v-html="content.header"></span>
                    </div>
                    <div class="col-3"></div>
                    <div class="buttonDiv col-3 d-flex">
                        <DynamicButton v-bind:buttonInfo="{ color:content.buttonColor, text:'', destination:'/resources' }" />
                    </div>
                </div> -->
                <!-- <div id="reasonTextLeft" class="container-fluid row">
                    <div class="col-10 d-flex text-left">
                        <p class="textParagraphs">
                            {{ content.paragraph }}
                        </p>
                    </div>
                </div> -->
                
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

<style scope>
.textParagraphs {
    font-family: 'DDINRegular'; 
}

ul {
    font-family: 'DDINRegular'; 
    list-style-type: initial;
    padding-left: 1rem;
    line-height: 1.5rem;
}

.reasonRow {
    margin-top: 3%;
}

.reasons {
    box-shadow: 2px -2.5px 2px 0
        rgba(0, 0, 0, 0.15), 0 1px 2px 0
        rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    width: 100%;
    height: 100%;
}

#reasonTitleButton {
    margin-top: 5%;
    margin-bottom: 5%;
}

.reasonLogosRight {
    margin-top: 5%;
    margin-left: 85%;
}

.reasonDivs {
    width: 100%;
    height: 100%;
}

.buttonDiv {
    margin-top: auto;
    margin-bottom: auto;
}


</style>


