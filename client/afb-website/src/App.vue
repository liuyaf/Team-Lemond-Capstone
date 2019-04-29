<template>
  <div id="app">
    <!-- <header class="d-flex">
      <div class="container col-lg-3 col-md-3 text-lg-right align-self-center">
            <img src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/headerImg-e1556491430371.png" class="navImg" alt="Age Friendly Business Logo">
      </div>
      <div class="container col-lg-5 col-md-6 align-self-center text-center pr-0 navItems">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> | 
            <router-link to="/resources">Resources</router-link> | 
            <router-link to="/discount-program">Discount Program</router-link> | 
            <router-link to="/contact-us">Contact Us</router-link>
        </div>
      </div>
    <div class="container d-flex col-lg-4 col-md-3 align-self-center px-0 navItems">
      <div class="col-3 px-1 navItems">
        <img src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/navFontBtn.png" class="navImg svgButton" alt="Change font button">
      </div>
      <div class="col-9 px-1 navItems">
        <a href=""><img src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/navTestBtn.png" class="navImg svgButton" alt="Assessment test button"> </a>
      </div>
    </div>
    <div class="hamburgerMenu justify-content-end navbar navbar-light pr-2">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
        <img src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/hamburgerBtn-1-e1556496454518.png" class="svgButton" alt="Hamburger Button">
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav extendedNav">
          <li>
            <router-link to="/">Home</router-link> 
          </li>
          <li>
            <router-link to="/about">About</router-link> 
          </li>
          <li>
            <router-link to="/resources">Resources</router-link> 
          </li>
          <li>
            <router-link to="/discount-program">Discount Program</router-link>
          </li>
          <li>
              <router-link to="/contact-us">Contact Us</router-link>
          </li>       
        </ul>
      </div>
    </div>
    </header> -->
    <header>
      <nav class="navbar fixed-top navbar-expand-lg d-flex pt-3 row">
        <div class="container col-lg-3 col-md-3 text-lg-right align-self-center">
          <img src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/headerImg-e1556491430371.png" class="navImg" alt="Age Friendly Business Logo">

          <div class="hamburgerMenu justify-content-end navbar-light pr-2">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
          <img src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/hamburgerBtn-1-e1556496454518.png" class="svgButton" alt="Hamburger Button">
          </button>
        </div>
        </div>
        <div class="container col-lg-5 col-md-6 align-self-center text-center px-2">
          <div id="nav">
            <router-link class="navSpacing navDisplay" to="/">Home</router-link> 
            <router-link class="navSpacing navDisplay" to="/about">About</router-link> 
            <router-link class="navSpacing navDisplay" to="/resources">Resources</router-link> 
            <router-link class="navSpacing navDisplay" to="/discount-program">Discount Program</router-link> 
            <router-link class="navSpacing navDisplay" to="/contact-us">Contact Us</router-link>
          </div>
        </div>
        <div class="container d-flex col-lg-4 col-md-3 align-self-center px-0">
          <div class="col-3 px-1 navDisplay">
            <img src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/navFontBtn.png" class="navImg svgButton" alt="Change font button">
          </div>
          <div class="col-9 px-1 navDisplay">
            <a href=""><img src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/navTestBtn.png" class="navImg svgButton" alt="Assessment test button"> </a>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <router-link to="/">Home</router-link> 
                  </li>
                  <li class="nav-item">
                      <router-link to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/resources">Resources</router-link> 
                  </li>
                  <li class="nav-item">
                      <router-link to="/discount-program">Discount Program</router-link> 
                  </li>
                  <li class="nav-item">
                      <router-link to="/contact-us">Contact Us</router-link>
                  </li>
              </ul>
          </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  width: 100%;
  overflow-x: hidden;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Fjalla One", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navSpacing {
  margin-right: 10px;
}

.hamburgerMenu {
  display: none;
}

nav {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  background-color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 991px) {
  .navImg {
    width: 100%;
    height: 50px;
  }
}

@media (max-width: 768px) {
  .navDisplay {
    display: none;
  }

  .hamburgerMenu {
    display: inline-flex;
  }

  .navImg {
    width: 250px;
    height: 55px;
  }
}

@media (max-width: 400px) {
  .navImg {
    width: 200px;
    height: 50px;
  }
}
</style>
