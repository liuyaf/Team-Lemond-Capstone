<template>
    <div class="discountCard row py-5 mx-auto">
        <div class="stickerDiv col-xs-12 col-sm-5 col-md-5 col-lg-5">
            <img class="stickerImage" v-bind:src="content.image">
        </div>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
            <div class="applySticker">
                <span v-html="content.header"></span>
                <br>
                <p class="textParagraphs">{{ content.paragraph }}</p>
                <br>
                <br>
                <DynamicButton v-bind:buttonInfo="{ color: '#CC3E16', text:'APPLY', destination:'/#' }"/>
            </div>
        </div>
    </div>
</template>

<script>
import DynamicButton from '@/components/DynamicButton.vue'

export default {
    name: 'ApplyStickerCard',
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
.discountCard {
    box-shadow: -2.5px 2px 4px 0 rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
}

.stickerDiv {
    margin-top: auto;
    margin-bottom: auto;
}

.stickerImage {
    width: 100%;
}
</style>


