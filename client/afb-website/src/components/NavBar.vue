<template>
    <header>
      <nav class="navbar fixed-top navbar-expand-lg d-flex pt-3 row">
        <div
          class="container-fluid col-lg-3 col-md-3 text-lg-right align-self-center"
          id="phoneDisplay"
        >
          <img
            src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/headerImg-e1556491430371.png"
            class="navImg"
            alt="Age Friendly Business Logo"
          >

          <div class="hamburgerMenu justify-content-end pr-2">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/hamburgerBtn-1-e1556496454518.png"
                class="svgButton"
                alt="Hamburger Button"
              >
            </button>
          </div>
        </div>

        <div class="container col-lg-5 col-md-6 align-self-center justify-content-center px-2">
          <div id="nav">
            <router-link class="navSpacing navDisplay" to="/">About</router-link>
            <router-link class="navSpacing navDisplay" to="/resources">Resources</router-link>
            <a href="https://www.seattle.gov/agefriendly/about/discount-program" class="navSpacing navDisplay">Discount Program</a>
            <router-link class="navSpacing navDisplay" to="/contact-us">Contact Us</router-link>
          </div>
        </div>

        <div class="container d-flex col-lg-4 col-md-3 align-self-center pl-0">
          <div class="col-12 px-1 d-flex justify-content-end">
            <img
              src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/navFontBtn.png"
              class="navImg ml-2 svgButton navDisplay"
              alt="Change font button"
            >
            <router-link class="navSpacing navDisplay" to="/assessment-selection">
              <img
                src="http://agefriendlysea.wpengine.com/wp-content/uploads/2019/04/navTestBtn.png"
                class="navImg ml-2 svgButton navDisplay"
                alt="Assessment test button"
              >
            </router-link>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="hamburgerNav navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/resources">Resources</router-link>
            </li>
            <li class="nav-item">
              <a href="https://www.seattle.gov/agefriendly/about/discount-program" class="navSpacing navDisplay">Discount Program</a>
            </li>
            <li class="nav-item">
              <router-link to="/contact-us">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'NavBar',
}
</script>

<style scoped>
header {
  position: fixed;
  z-index: 1000;
  width: 100%;
}

.hamburgerNav[data-v-4295d220] {
  font-family: "Fjalla One";
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

#nav {
  margin-top: auto;
  margin-bottom: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  color: lightblue;
}

#navbarSupportedContent {
  padding-left: 10px;
  padding-top: 10px;
}

.navImg {
  width: auto;
  height: auto;
}

@media (max-width: 768px) {
  .navDisplay {
    display: none;
  }

  .hamburgerMenu {
    display: inline-flex;
  }

  #phoneDisplay {
    margin-left: 10px;
    flex: none;
    max-width: 100%;
  }

  .navImg {
    width: 200px;
    height: auto;
  }
}
</style>

