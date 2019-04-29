<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/resources">Resources</router-link> | 
      <router-link to="/discount-program">Discount Program</router-link> | 
      <router-link to="/contact-us">Contact Us</router-link>
    </div>
    <router-view/>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>


<style>
#app {
  width: 100%;
  overflow-x: hidden;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Fjalla One', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: white;
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  height: 300px;
  background-color: black;
  color: white;
  padding-top: 30px;
}
</style>
