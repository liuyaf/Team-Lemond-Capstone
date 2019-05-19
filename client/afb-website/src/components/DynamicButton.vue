<template>
    <div>
        <button class="btn" v-bind:style="{ border: '4px ' + this.buttonInfo.color + ' solid', color: this.buttonInfo.color, 'border-radius': '0px' }">
            <!-- if the destination is a route, then it will render a router link -->
            <router-link v-if="!this.buttonInfo.isUrl" v-bind:style="{ color: this.buttonInfo.color }" v-bind:to="this.buttonInfo.destination">
                {{ this.buttonInfo.text }}

                <!-- svg for the right arrow -->
                <svg v-bind:style="{ width: '40px', height: '30px', padding: '0' }" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">
                <path v-bind:style="{ fill: this.buttonInfo.color }" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
                C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
                c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                </svg>
            </router-link>

            <!-- if destination is a url, then it will render an a tag with href to the url -->
            <a v-if="this.buttonInfo.isUrl" v-bind:style="{ color: this.buttonInfo.color }" v-bind:href="this.buttonInfo.destination">
                {{ this.buttonInfo.text }}

                <!-- svg for the right arrow -->
                <svg v-bind:style="{ width: '40px', height: '30px', padding: '0' }" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 31.49 31.49" style="enable-background:new 0 0 31.49 31.49;" xml:space="preserve">
                <path v-bind:style="{ fill: this.buttonInfo.color }" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
                C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
                c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                </svg>
            </a>
        </button> 
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// A button components that goes to another page on the website
    // parameters:
    //  - color: String
    //  - text: String
    //  - destination: String
    //  - isUrl: boolean

    // how to use:
    //      <DynamicButton v-bind:buttonInfo="{ color:'black', text: 'button text', destination:'the route', isUrl: false }"/>

    // Components that uses it:
    //  - About.vue
    //  - ApplyStickerCard.vue
    //  - MediaTextCard.vue
    //  - AssessmentCard.vue

export default {
    name: 'DynamicButton',
    props: ['buttonInfo']
}
</script>

<style scoped>
    button {
        font-family: "Fjalla One";
    }
</style>

