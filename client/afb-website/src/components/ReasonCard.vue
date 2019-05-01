<template>
    <div class="row mt-5">
        <!-- big image -->
        <div class="imageDiv" v-bind:class="figureClass">
            <img v-bind:style="{ float:imageFloat }" v-bind:src="this.content.image" alt="reson icon">
        </div>
        

        <!-- rest of content -->
        <div class="col-sm-12 col-lg-6" v-html="this.content.content"></div>
    </div>
</template>

<script>

export default {
    name: 'ReasonCard',
    props: ['content'],
    computed: {
        figureClass: function() {
            return this.content.className === "wp-block-media-text alignwide has-media-on-the-right" ? 'col-sm-12 col-lg-6 order-last' : 'col-sm-12 col-lg-6';
        },
        imageFloat: function() {
            return this.content.className === "wp-block-media-text alignwide has-media-on-the-right" ? 'right' : '';

        }
    }
}
</script>

<style scope>
ul {
    list-style-type: initial;
    line-height: 1.5rem;
    font-family: 'DDINRegular';
}

.imageDiv {
    margin-top: auto;
    margin-bottom: auto;
}
</style>


