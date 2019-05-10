<template>
    <header class="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light row mx-auto">
            <!-- navbar icon -->
            <a class="navbar-brand col-3" href="#">
                <img src="@/assets/AgeFriendlyBusinessLogo1.svg" alt="">
            </a>

            <!-- hamburger button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <!-- hamburger button svg below -->
                <img src="@/assets/hamburger-menu.svg" alt="">
            </button>

            <!-- list of the navbar component -->
            <div class="col-6 middleNav collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>

            <!-- right navbar -->
            <div class="col-3 rightNav collapse navbar-collapse">
                <button>font change</button>
                <button>assessment test</button>
            </div>
        </nav>
        
        <!--  sub tab -->
        <div class="div_top_hypers">
            <ul class="ul_top_hypers">
                <li>
                    <a href="" class="a_top_hypers"> What is Age Friendly ?</a>
                </li>
                <li>
                    <a href="" class="a_top_hypers"> 5 reasons to become Age Friendly</a>
                </li>
                <li>
                    <a href="" class="a_top_hypers"> How to become Age Friendly</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
    name: 'LandingNav'
}
</script>

<style scoped>
header {
    background-color: white;
}

nav {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
    background-color: white;
}

.navbar-toggler {
    border-color: rgba(0,0,0,0)
}

.div_top_hypers {
    background-color: white;
    display: inline;
}

.ul_top_hypers {
    padding-left: 0;
    text-align: center;
    margin-bottom: 0;
    padding-top: 8px;
    padding-bottom: 8px;
}

@media (max-width: 690px) {
    .ul_top_hypers {
        display: none;
    }
}

.ul_top_hypers li{
    display: inline;
    margin-left: 20px;
    margin-right: 20px;
}

li a {
    color: #2c3e50;
}
</style>


