<template>
    <div class="discountCard row py-5">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 d-flex">
            <div class="mx-auto">
                <img class="stickerImage" v-bind:src="content.image">
            </div>
        </div>
        <div class="discountContent col-xs-12 col-sm-12 col-md-12 col-lg-8">
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

.discountContent {
    margin-top: auto;
    margin-bottom: auto;
}

.stickerImage {
    width: auto;
    height: auto;
}

.textParagraphs {
  font-family: 'DDINRegular';
}
</style>


