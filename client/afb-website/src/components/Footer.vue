<template>
    <div>
        <div class="container-fluid row">
            <div class="col-6 d-flex">
                <h1 class="textHeaders footerText">Age Friendly Seattle</h1>
            </div>
            <div class="col-3 d-flex footerLinks">
                <ul>
                    <li id="listHeader">City-Wide Information</li>
                    <li>Age Friendly Seattle</li>
                    <li>Age Friendly Seattle</li>
                </ul>
            </div>
            <div class="col-3 d-flex footerLinks">

                <ul>
                    <li id="listHeader">Top Requests</li>
                    <li>Age Friendly Seattle</li>
                    <li>Age Friendly Seattle</li>
                </ul>
            </div>
        </div>
        <div class="copyrightSection container-fluid row justify-content-center">
            <p class="text-center">© Copyright 1995 - 2019 City of Seattle
                <br> ADA Notice | Privacy Policy | Notice of Non-discrimination</p>
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
    list-style-type: none;
    line-height: 2.5em;
}

.footerText {
    margin-left: 10%;
}

.copyrightSection {
    margin-top: 4rem;
}
</style>


