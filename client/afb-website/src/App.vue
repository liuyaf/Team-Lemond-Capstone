<template>
  <div id="app">
    <!-- nav bar -->
    <NavBar @fontToggled="setEnlargeBoolean($event)" v-if="$route.name == 'about' || $route.name == 'resources' || $route.name == 'selection' || $route.name == 'contact'"/>

    <!-- the views -->
    <main>
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
       >
        <router-view :enlargeFont="enlargeFont"/>
      </transition>
    </main>

    <!-- footer -->
    <Footer
      v-if="$route.name == 'about' || $route.name == 'resources' || $route.name == 'selection' || $route.name == 'contact'"
      :enlargeFont="enlargeFont"
    />

    <!-- back to top button -->
    <back-to-top visibleoffset="1500">
      <img class="btt-button" src="./assets/back-to-top-icon.svg" alt="scroll to top button">
    </back-to-top>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    Footer,
    NavBar
  },
  data() {
    return {
      prevHeight: 0,
      enlargeFont: false
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    setEnlargeBoolean(e) {
      this.enlargeFont = e;
    }
  }
};
</script>


<style scoped>
/* general styling */
#app {
  width: 100%;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Fjalla One", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}

/* transition animation */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* back to top button */
.btt-button {
  width: 100px;
}

@font-face {
  font-family: "DDINRegular";
  src: url('./assets/D-DIN.eot'); /* IE9 Compat Modes */
  src: url('./assets/D-DIN.eot?#iefix') format('embedded-opentype'); /* IE6-IE8 */
  src: url("./assets/D-DIN.otf") format('opentype'),
  url('./assets/D-DIN.woff2') format('woff2'), /* Super Modern Browsers */
  url('./assets/D-DIN.woff') format('woff'), /* Pretty Modern Browsers */
  url('./assets/D-DIN.ttf')  format('truetype'), /* Safari, Android, iOS */
}

@media (max-width: 768px) {
  .btt-button {
    width: 15vw;
  }
}
</style>
