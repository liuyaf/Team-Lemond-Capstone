<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg d-flex pt-3 row">
      <!-- one row for home button and hamburger button -->
      <div
        class="container-fluid col-lg-3 col-md-3 text-lg-right align-self-center"
        id="phoneDisplay"
      >
        <!-- home button -->
        <router-link to="/">
          <img
            src="@/assets/AgeFriendlyBusinessLogo2.svg"
            class="navImg"
            alt="Age Friendly Business Logo"
          >
        </router-link>

        <!-- hamburger menu button -->
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
            <img src="@/assets/hamburger-menu.svg" class="svgButton" alt="Hamburger Button">
          </button>
        </div>
      </div>

      <!-- desktop navbar -->
      <div class="container col-lg-6 col-md-6 align-self-center justify-content-center">
        <div id="nav">
          <router-link class="navSpacing navDisplay" to="/">About</router-link>
          <router-link class="navSpacing navDisplay" to="/resources">Resources</router-link>
          <a
            href="https://www.seattle.gov/agefriendly/about/discount-program"
            class="navSpacing navDisplay"
          >Discount Program</a>
          <router-link class="navSpacing navDisplay" to="/contact-us">Contact Us</router-link>
        </div>
      </div>

      <!-- change font button and take assessment button -->
      <div class="container d-flex col-lg-3 col-md-3 align-self-center pl-0">
        <div class="col-12 px-1 d-flex justify-content-end">
          <img
            src="@/assets/font-change-button.svg"
            class="navBtnImg ml-2 svgButton navDisplay"
            alt="Assessment test button"
          >
          <router-link class="navSpacing navDisplay" to="/assessment-selection">
            <img
              src="@/assets/navbar-assessment-button.svg"
              class="navBtnImg ml-2 svgButton navDisplay"
              alt="Assessment test button"
            >
          </router-link>
        </div>
      </div>

      <!-- collapsing on the mobile navbar -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="hamburgerNav navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resources">Resources</router-link>
          </li>
          <li class="nav-item">
            <a href="https://www.seattle.gov/agefriendly/about/discount-program">Discount Program</a>
          </li>
          <li class="nav-item">
            <router-link to="/contact-us">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/assessment-selection">Assessment Test</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- sub tab -->
    <div v-if="$route.name == 'about'" class="div_top_hypers">
      <ul class="ul_top_hypers">
        <li>
          <router-link to="#about-1" class="a_top_hypers">What is Age Friendly ?</router-link>
        </li>
        <li>
          <router-link to="#about-2" class="a_top_hypers">5 reasons to become Age Friendly</router-link>
        </li>
        <li>
          <router-link to="#about-3" class="a_top_hypers">How to become Age Friendly</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "NavBar"
};
</script>

<style scoped>
header {
  position: fixed;
  z-index: 1000;
  width: 100%;
}

.hamburgerNav {
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
  padding-bottom: 18px;
}

#nav a.router-link-exact-active {
  color: lightblue;
  border-bottom: 8px solid #6ead94;
}

#navbarSupportedContent {
  padding-left: 10px;
  padding-top: 10px;
}

.navBtnImg {
  width: auto;
  height: auto;
}

.navImg {
  width: 240px;
}

@media (max-width: 930px) {
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
}

@media (max-width: 992px) {
  .navBtnImg {
    width: 150px;
  }

  #phoneDisplay {
    padding-left: 10px;
  }
}

/* the sub tab */
.div_top_hypers {
  background-color: white;
}

.ul_top_hypers {
  padding-left: 0;
  text-align: center;
  margin-bottom: 0;
  padding-top: 95px;
  padding-bottom: 8px;
}

@media (max-width: 690px) {
  .ul_top_hypers {
    display: none;
  }

  .navImg {
    width: 200px;
  }
}

.ul_top_hypers li {
  display: inline;
  margin-left: 20px;
  margin-right: 20px;
}

.ul_top_hypers li a {
  color: black;
}
</style>

