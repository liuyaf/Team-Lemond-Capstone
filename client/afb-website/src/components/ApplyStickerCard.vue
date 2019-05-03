<template>
    <div class="stickerCard container-fluid row py-5">
        <div class="col-lg-4 col-sm-12 d-flex">
            <div class="mx-auto">
                <img v-bind:src="content.image" class="stickerImage">
            </div>
        </div>
        <div class="col-lg-7 col-sm-12 d-flex">
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

<style scope>
.stickerCard {
    box-shadow: -2.5px 2px 4px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
}
</style>


