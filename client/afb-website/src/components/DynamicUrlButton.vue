<template>
    <div>
        <button :class="{ buttonEnlarge: enlargeFont }" class="btn" v-bind:style="{ border: '4px ' + this.buttonInfo.color + ' solid', color: this.buttonInfo.color, 'border-radius': '0px' }" @click="gotosite(assignDestination)">
            <a v-bind:style="{ color: this.buttonInfo.color }">
                {{ this.buttonInfo.text }}

                <!-- the svg for a download button -->
                <svg v-bind:style="{ width: '40px', height: '30px', padding: '0' }" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 41.712 41.712" style="enable-background:new 0 0 41.712 41.712;" xml:space="preserve">
                <path v-bind:style="{ fill: this.buttonInfo.color }" d="M31.586,21.8c0.444-0.444,0.444-1.143,0-1.587c-0.429-0.444-1.143-0.444-1.571,0l-8.047,8.032V1.706
                c0-0.619-0.492-1.127-1.111-1.127c-0.619,0-1.127,0.508-1.127,1.127v26.539l-8.031-8.032c-0.444-0.444-1.159-0.444-1.587,0
                c-0.444,0.444-0.444,1.143,0,1.587l9.952,9.952c0.429,0.429,1.143,0.429,1.587,0L31.586,21.8z M39.474,29.086
                c0-0.619,0.492-1.111,1.111-1.111c0.619,0,1.127,0.492,1.127,1.111v10.92c0,0.619-0.508,1.127-1.127,1.127H1.111
                C0.492,41.133,0,40.625,0,40.006v-10.92c0-0.619,0.492-1.111,1.111-1.111s1.127,0.492,1.127,1.111v9.809h37.236V29.086z"/>
                </svg>
            </a>
        </button> 
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// A button components that goes to an external website
    // parameters:
    //  - color: String
    //  - text: String
    //  - Url: String

    // how to use:
    //      <DynamicUrlButton v-bind:buttonInfo="{ color:'black', text: 'button text', Url:'the url' }"/>

    // Components that uses it
    //  - Resources.vue

export default {
    name: 'DynamicUrlButton',
    props: ['buttonInfo', 'enlargeFont'],
    methods: {
        gotosite(producturl){
            window.open(producturl);   
        }
    },
    computed: {
        assignDestination: function() {
            return this.buttonInfo.Url;
        }
    }
}
</script>

<style scoped>
    button {
        font-family: "Fjalla One";
    }

    .buttonEnlarge a {
        font-size: calc(12px + 0.8vw);
    }
</style>

