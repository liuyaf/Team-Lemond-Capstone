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
                <div class="col-6 d-flex mt-3">
                    <img v-bind:src="content.smallIcon">
                </div>
                <div id="reasonTitleButton" class="container-fluid row">
                    <div class="col-6 d-flex text-left">
                        <span v-html="content.header"></span>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3 d-flex">
                        <!-- <svg width="80" height="61" viewBox="0 0 80 61" fill="none" class="svgButton" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-2" y="2" width="76" height="57" transform="matrix(-1 0 0 1 76 0)" stroke="#CC3E16" stroke-width="4" />
                            <path d="M60 30.906C59.9819 30.4445 59.792 29.9111 59.4755 29.5747L49.1483 18.6012C48.4485 17.9723 47.1066 17.7127 46.3245 18.4398C45.5541 19.1559 45.577 20.5449 46.3445 21.2639L53.6058 28.9696H22.8863C21.8169 28.9696 20.95 29.8365 20.95 30.906C20.95 31.9755 21.8169 32.8425 22.8863 32.8425H53.6058L46.3445 40.5482C45.6837 41.2101 45.5616 42.6479 46.3245 43.3723C47.0871 44.0966 48.4773 43.8652 49.1483 43.2109L59.4755 32.2374C59.8289 31.8618 60.0011 31.4212 60 30.906Z"
                                fill="#CC3E16" />
                        </svg> -->
                        <button class="btn mediaTextButton">&#8594;</button>
                    </div>
                </div>
                <div id="reasonTextLeft" class="container-fluid row">
                    <div class="col-10 d-flex text-left">
                        <p class="textParagraphs">
                            {{ content.paragraph }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MediaTextCard',
    props: ['content'],
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

.mediaTextButton {
  border-radius: 0;
  border: 2px solid black;
  color: black;
  height: 46px;
}
</style>


