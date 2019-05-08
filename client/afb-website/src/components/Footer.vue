<template>
    <footer>
        <div>
            <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                        <h1 class="footerHeader footerText">Age Friendly Seattle</h1>
                    <div>
                        <h3 class="footerTag footerText">Working to make Seattle a great place to grow up and grow old!</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 footerLinks footerContent">
                    <ul id="leftList">
                        <li id="listHeader" class="footerListText">Local Resources</li>
                        <li class="footerListText">Age Friendly Seattle</li>
                        <li class="footerListText">Community Living Connections</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 footerLinks footerContent">

                    <ul id="rightList">
                        <li id="listHeader" class="footerListText">Community Partners</li>
                        <li class="footerListText">Acknowledgements</li>
                        <li class="footerListText">Age Friendly Coalition for Seattle and King County</li>
                    </ul>
                </div>
            </div>
            <div class="copyrightSection container-fluid row justify-content-center">
                <p class="copyrightText text-center">© Copyright 2019 City of Seattle
                    <br> <a href="http://www.seattle.gov/americans-with-disabilities-act">ADA Notice</a> | <a href="http://www.seattle.gov/civilrights/civil-rights/title-vi-notice-of-nondiscrimination">Notice of Non-discrimination</a> | Accessibility </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
  min-height: 300px;
  height: auto;
  background-color: #363636;
  color: white;
  padding-top: 30px;
}


.footerLinks {
    border-left: 1px solid white;
}

li , .copyrightText {
    font-size: calc(11px + .4vw);
}

.footerHeader {
    font-size: calc(20px + 1vw);
}

.footerTag {
    font-size: calc(12px + .4vw);
}

.footerText {
    margin-left: 10%;
}

.copyrightSection {
    margin-top: 4rem;
}

#rightList , #leftList {
    padding-right: 15px;
    padding-left: 0;
    list-style-type: none;
    line-height: 2rem;
}

.footerListText {
    font-size: calc(12px + .2vw);
}

@media (max-width: 992px) {

    #leftList {
        padding-left: 20%;
    }

    .footerLinks {
        border-left: 1px solid white;
        margin-top: 15px;
    }

}


@media (max-width: 572px) {

    #leftList , #rightList {
        padding-top: 5px;
        border-top: 1px solid white;
        margin-right: 10%;
        margin-left: 10%;
        padding-left: 0;
        font-size: 13px;
    }

    .footerLinks {
        border-left: 1px solid white;
        margin-top: 15px;
    }

    .copyrightSection {
        margin-top: 10px;
    }
}

</style>


