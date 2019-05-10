<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view/>
    </transition>

    <!-- back to top button -->
    <back-to-top visibleoffset="1500">
      <img class="btt-button" src="./assets/back-to-top-icon.svg" alt="">
    </back-to-top>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevHeight: 0
    }
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
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.btt-button {
  width: 100px;
}

/* back to top button */
@media (max-width: 768px) {
  .btt-button {
    width: 15vw;
  }
}
</style>
