<template>
    <div>
        <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <h1 class="footerHeader footerText">Age Friendly Seattle</h1>
                <div>
                    <h3 class="footerTag footerText">Working to make Seattle a great place to grow up and grow old!</h3>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 footerLinks footerContent">
                <ul class="leftList pr-3">
                    <li id="listHeader">Local Resources</li>
                    <li>Age Friendly Seattle</li>
                    <li>Community Living Connections</li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6 footerLinks footerContent">

                <ul class="rightList pr-3">
                    <li id="listHeader">Community Partners</li>
                    <li>Acknowledgements</li>
                    <li>Age Friendly Coalition for Seattle and King County</li>
                </ul>
            </div>
        </div>
        <div class="copyrightSection container-fluid row justify-content-center">
            <p class="text-center">© Copyright 2019 City of Seattle
                <br> ADA Notice | Notice of Non-discrimination | Accessibility </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footerLinks {
    border-left: 1px solid white;
}

ul {
    padding-left: 0;
    list-style-type: none;
    line-height: 2.5em;
}

li {
    font-size: calc(10px + .4vw);
}

.footerHeader {
    font-size: calc(20px + 1vw);
}

.footerTag {
    font-size: 16px;
}

.footerText {
    margin-left: 10%;
}

.copyrightSection {
    margin-top: 4rem;
}

@media (max-width: 992px) {

    .leftList {
        padding-top: 5px;
        padding-left: 20%;
    }

    .rightList {
        padding-top: 5px;
    }

    .footerLinks {
        border-left: 1px solid white;
        margin-top: 15px;
    }


}

</style>


