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
  </div>
</template>

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
</style>
