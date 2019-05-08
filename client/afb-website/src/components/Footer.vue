<template>
  <footer>
    <div>
      <div class="row">
        <!-- Bulma Modal for Accessbility information -->
        <div class="modal" v-bind:class="{ 'is-active': showModalAccessbility }">
          <div class="modal-background"></div>
          <div class="modal-content p-5">
            <p>
              Our goal for this website is to provide information and access to services to all visitors. We
              understand that not everyone experiences web content the same way. Some have impaired
              vision, hearing, ability to use a mouse, or other disability. As part of our commitment to
              universal access, we make it a priority to take these differences into account by organizing our
              site and presenting our content in ways that are usable by visitors with disabilities and the
              assistive technologies they rely on. We are committed to meeting the accessibility standards
              guidelines known as Web Content Accessibility Guidelines (WCAG) 2.0 AA.
              <br>
              <br>We also recognize the importance of feedback from ordinary visitors to our site. We invite you
              to give us suggestions and feedback based on your experience visiting our site. E-mail
              agefriendly@seattle.gov with specific feedback about:
            </p>
            <br>

            <ul>
              <li>The page, content, or function you would like us to check.</li>
              <li>The difficulty you are experiencing.</li>
              <li>Your suggestions for improving this site.</li>
            </ul>
            <br>

            <p>
              To access aging or disability services in the greater Seattle area, visit
              <a
                href="https://www.communitylivingconnections.org"
              >Community Living</a>
              Connections or call 1-844-348-5464. Elsewhere in the United States, visit
              <a
                href="https://eldercare.acl.gov/Public/Index.aspx"
              >Eldercare Locator</a> or
              call 1-800-677-1116.
            </p>
          </div>
          <button class="modal-close is-large" @click="showModalAccessbility = false" aria-label="close"></button>
        </div>

        <!-- Bulma Modal for Acknowledgement Modal -->
        <div class="modal" v-bind:class="{ 'is-active': showModalAcknowledgements }">
          <div class="modal-background"></div>
          <div class="modal-content p-5">
            <h1> Special thanks to the following organizations and people: </h1>
            <br>

            <ul>
              <li>AARP Network of Age-friendly States and Communities</li>
              <li>AARP Washington</li>
              <li>Age Friendly Coalition for Seattle and King County</li>
              <li>Age-Friendly NYC</li>
              <li>Aging and Disability Services, Seattle Human Services Department</li>
              <li>Muhammad Hariz</li>
              <li>Davis (Based) Huynh</li>
              <li>IlluminAge Communication Partners</li>
              <li>Yicheng (Estelle) Jiang</li>
              <li>Liuyang Fu</li>
              <li>The New York Academy of Medicine</li>
              <li>Seattle Office of Economic Development</li>
              <li>University of Washington Information School</li>
              <li>Workforce Development Council of Seattle-King County</li>
            </ul>
            <br>
          </div>
          <button class="modal-close is-large" @click="showModalAcknowledgements = false" aria-label="close"></button>
        </div>

        <!-- Footer content -->
        <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
          <h1 class="footerHeader footerText">Age Friendly Seattle</h1>
          <div>
            <h3
              class="footerTag footerText"
            >Working to make Seattle a great place to grow up and grow old!</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 footerLinks footerContent">
          <ul id="leftList">
            <li id="listHeader" class="footerListText">Local Resources</li>
            <li class="footerListText">
                <a href="http://www.seattle.gov/agefriendly/">Age Friendly Seattle</a>
            </li>
            <li class="footerListText">
                <a href="https://www.communitylivingconnections.org/">Community Living Connections</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 footerLinks footerContent">
          <ul id="rightList">
            <li id="listHeader" class="footerListText">Community Partners</li>
            <li class="footerListText">
                <a @click="showModalAcknowledgements = true">Acknowledgements</a>
            </li>
            <li class="footerListText">
                <a href="https://www.agingkingcounty.org/age-friendly-coalition/">Age Friendly Coalition for Seattle and King County</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyrightSection container-fluid row justify-content-center">
        <p class="copyrightText text-center">
          © Copyright 2019 City of Seattle
          <br>
          <a href="http://www.seattle.gov/americans-with-disabilities-act">ADA Notice</a> |
          <a
            href="http://www.seattle.gov/civilrights/civil-rights/title-vi-notice-of-nondiscrimination"
          >Notice of Non-discrimination</a> |
          <a @click="showModalAccessbility = true">Accessibility</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return { showModalAccessbility: false,
             showModalAcknowledgements: false
        };
  }
};
</script>

<style scoped>
.modal-content {
  color: black;
}

.modal-content li {
  list-style-type: initial;
  margin-left: 30px;
}

.modal-cotent li,
p {
  color: black;
  font-size: 18px;
}

.modal-content p a {
  color: blue;
}

a {
  color: white;
  padding: 5px 0;
}

.copyrightText a:hover {
  color: black;
  background-color: white;
}

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

li,
.copyrightText {
  font-size: calc(11px + 0.4vw);
}

.copyrightText {
  color: white;
}

.footerHeader {
  font-size: calc(20px + 1vw);
}

.footerTag {
  font-size: calc(12px + 0.4vw);
}

.footerText {
  margin-left: 10%;
}

.copyrightSection {
  margin-top: 4rem;
}

#rightList,
#leftList {
  padding-right: 15px;
  padding-left: 0;
  list-style-type: none;
  line-height: 2rem;
}

#rightList a, #leftList a {
    color: white;
    padding: 5px 0;
}

#rightList a:hover, #leftList a:hover {
    color: black;
  background-color: white;
}


#listHeader {
  font-size: calc(16px + 0.2vw);
  font-weight: 600;
}

.footerListText {
  font-size: calc(12px + 0.2vw);
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
  #leftList,
  #rightList {
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


