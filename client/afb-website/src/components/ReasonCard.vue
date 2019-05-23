<template>
    <div class="row mt-5">
        <a v-bind:id="this.content.reasonId"></a>
        <!-- big image -->
        <div class="imageDiv" v-bind:class="figureClass">
            <img v-bind:style="{ float:imageFloat }" v-bind:src="this.content.image" alt="reason icon">
        </div>
        

        <!-- rest of content -->
        <div
            :class="{ reasonEnlarge: enlargeFont }"
            class="reasonContent col-sm-10 col-lg-9" 
            v-html="this.content.content">
        </div>
    </div>
</template>

<script>
// This component is used in the resources page under the 'resources' route.
// This component also has props that were parsed from the WordPress API.
// See Resources.vue to see how content were parsed

// Components that use this:
//  - Resources.vue

export default {
    name: 'ReasonCard',
    props: ['content', 'enlargeFont'],
    computed: {
        figureClass: function() {
            return this.content.className === "wp-block-media-text alignwide has-media-on-the-right" ? 'col-sm-2 col-lg-3 order-last' : 'col-sm-2 col-lg-3';
        },
        imageFloat: function() {
            return this.content.className === "wp-block-media-text alignwide has-media-on-the-right" ? 'right' : '';
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: initial;
    line-height: 1.5rem;
    margin-left: 1rem;
    font-family: 'DDINRegular';
}

p {
  font-family: 'DDINRegular';
}

.imageDiv {
    margin-top: auto;
    margin-bottom: auto;
}

.reasonContent {
    margin-top: auto;
    margin-bottom: auto;
}

.reasonEnlarge.reasonContent[data-v-556e00b8] >>> h3 { /* on enlarge button */
    font-size: calc(24px + 1vw);
}

.reasonEnlarge.reasonContent[data-v-556e00b8] >>> p,
.reasonEnlarge.reasonContent[data-v-556e00b8] >>> ul { /* on enlarge button */
    font-size: calc(15px + 1vw);
}
</style>


