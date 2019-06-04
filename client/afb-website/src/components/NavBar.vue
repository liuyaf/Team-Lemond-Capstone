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

        <!-- font enlarge and hamburger menu button -->
        <div class="hamburgerMenu justify-content-end pr-2">
          <button class="navbar-toggler"  v-on:click="toggleFontSize">
            <img
              src="@/assets/font-change-button.svg"
              alt="Enlarge font button"
            >
          </button>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="navBarExpanded = !navBarExpanded"
          >
            <img v-if="!navBarExpanded" src="@/assets/hamburger-menu.svg" alt="Hamburger Button">
            <img v-if="navBarExpanded" src="@/assets/exit.svg" alt="Collapse Hamburger Button">
          </button>
        </div>
      </div>

      <!-- desktop navbar -->
      <div class="container col-lg-6 col-md-6 align-self-center justify-content-center">
        <div id="nav" :class="{ navbarEnlarge: enlargeFont }">
          <router-link class="navSpacing navDisplay" to="/" exact v-on:click.native="aboutIsHidden = !aboutIsHidden, resourceIsHidden = false">About</router-link>
          <router-link class="navSpacing navDisplay" to="/resources" v-on:click.native="resourceIsHidden = !resourceIsHidden, aboutIsHidden = false">Resources</router-link>
          <a
            href="https://www.seattle.gov/agefriendly/about/discount-program/" target="_blank"
            class="navSpacing navDisplay"
          >Discount Program</a>
          <router-link class="navSpacing navDisplay" to="/contact-us">Contact Us</router-link>
        </div>
      </div>

      <!-- change font button and take assessment button -->
      <div class="container d-flex col-lg-3 col-md-3 align-self-center pl-0">
        <div class="col-12 px-1 d-flex justify-content-end">
          <button class="font-enlarge"  v-on:click="toggleFontSize">
            <img
              src="@/assets/font-change-button.svg"
              class="navBtnImg ml-2 navDisplay"
              alt="Font enlarge button"
            >
          </button>
          
          <button class="take-assessment" @click="gotosite('/assessment-selection')">
            <router-link class="navSpacing navDisplay" to="/assessment-selection">
              <img
                src="@/assets/navbar-assessment-button.svg"
                class="navBtnImg ml-2 navDisplay"
                alt="Assessment test button"
              >
            </router-link>
          </button>
        </div>
      </div>

      <!-- collapsing on the mobile navbar -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="hamburgerNav navbar-nav mr-auto">
          <li class="nav-item" @click="navBarExpanded = false">
            <router-link to="/" data-toggle="collapse" data-target="#navbarSupportedContent" exact>About</router-link>
          </li>
          <li class="nav-item" @click="navBarExpanded = false">
            <router-link to="/resources" data-toggle="collapse" data-target="#navbarSupportedContent">Resources</router-link>
          </li>
          <li class="nav-item" @click="navBarExpanded = false">
            <a href="https://www.seattle.gov/agefriendly/about/discount-program/" target="_blank" >Discount Program</a>
          </li>
          <li class="nav-item" @click="navBarExpanded = false">
            <router-link to="/contact-us" data-toggle="collapse" data-target="#navbarSupportedContent">Contact Us</router-link>
          </li>
          <li class="nav-item" @click="navBarExpanded = false">
            <router-link to="/assessment-selection" data-toggle="collapse" data-target="#navbarSupportedContent">Assessment Test</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- sub tab for about -->
    <div v-if="$route.name == 'about'" v-show="aboutIsHidden" class="div_top_hypers">
      <ul class="ul_top_hypers" :class="{ subtabEnlarge: enlargeFont }">
        <li>
          <router-link to="/" v-scroll-to="{ el: '#about-1', offset: -110 }" class="a_top_hypers">What is Age-Friendly ?</router-link>
        </li>
        <li>
          <router-link to="/" v-scroll-to="{ el: '#about-2', offset: -50 }" class="a_top_hypers">5 reasons to become Age-Friendly</router-link>
        </li>
        <li>
          <router-link to="/" v-scroll-to="{ el: '#about-3', offset: -110 }" class="a_top_hypers">How to become Age-Friendly</router-link>
        </li>
      </ul>
    </div>

    <!-- sub tab for resource -->
    <div v-if="$route.name == 'resources'" v-show="resourceIsHidden" class="div_top_hypers">
      <ul class="ul_top_hypers" :class="{ subtabEnlarge: enlargeFont }">
        <li>
          <router-link to="/resources" v-scroll-to="{ el: '#resource-1', offset: -100 }" class="a_top_hypers">Resource Guide</router-link>
        </li>
        <li>
          <router-link to="/resources" v-scroll-to="{ el: '#resource-2', offset: -150 }" class="a_top_hypers">Age Friendly Seattle</router-link>
        </li>
        <li>
          <router-link to="/resources" v-scroll-to="{ el: '#resource-3', offset: -140 }" class="a_top_hypers">5 reasons to be Age-Friendly</router-link>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// This components is visible in all the landing page routes

// Components that use it:
//  - App.vue

export default {
  name: "NavBar",
  data () {
    return {
      enlargeFont: false,
      aboutIsHidden: true,
      resourceIsHidden: false,
      navBarExpanded: false
    }
  },
  methods: {
    toggleFontSize: function() {
      this.enlargeFont = !this.enlargeFont
      // console.log(this.enlargeFont)
      this.$emit('fontToggled', this.enlargeFont)
    },
    gotosite(producturl){
      this.$router.push(producturl);      
    }
  }
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

#nav a.router-link-active {
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
  min-height: 1px; /* ie fix???? */
  width: 240px;
  display: inline-block;
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

.take-assessment, .font-enlarge {
  border: none;
  padding: 0;
  background-color: white;
}

.subtabEnlarge { /* on enlarge button */
  font-size: calc(8px + 1vw);
}

#nav.navbarEnlarge > a { /* on enlarge button */
  font-size: calc(10px + 1vw);
}

/* for mobile screen width */
@media (max-width: 400px) {
  .navbar-toggler img {
    width: 30px;
  }

  .navbar-toggler {
    padding: 12px 8px;
  }

  #phoneDisplay {
    padding-left: 0;
  }
}
</style>

