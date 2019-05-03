<template>
  <div id="app">
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/d-din" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
    <Assessment></Assessment>
  </div>
</template>

<script>
import Assessment from "./components/Assessment";
export default {
  name: "app",
  components: { Assessment },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}
</style>
