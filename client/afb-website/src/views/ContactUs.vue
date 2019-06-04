<template>
  <div class="contact">
    <!-- formspree version -->
    <!-- <form method="POST" action="https://formspree.io/agefriendly@seattle.gov">
      <div class="form-group row justify-content-center d-flex">
        <div class="col-md-6 justify-content-center">
          <label class="offset-md-5 col-md-7 col-form-label phoneDisplay" for="text">First Name:</label>
          <div class="offset-md-5 col-md-7 phoneDisplay">
            <input id="FName" name="name" type="text" required="required" class="form-control">
          </div>
        </div>
        <div class="col-md-6">
          <label class="col-md-7 col-form-label phoneDisplay" for="text">Last Name:</label>
          <div class="col-md-7 phoneDisplay">
            <input id="LName" name="name" type="text" required="required" class="form-control">
          </div>
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="text1" class="col-md-7 col-sm-12 col-form-label">Company/Organization:</label>
        <div class="col-md-7 col-sm-12 ">
          <input id="org" name="org" type="text" class="form-control">
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="text2" class="col-md-7 col-sm-12  col-form-label">Phone:</label>
        <div class="col-md-7 col-sm-12 ">
          <input
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            type="text"
            class="form-control"
            required="required"
          >
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="text3" class="col-md-7 col-sm-12  col-form-label">Your Email:</label>
        <div class="col-md-7 col-sm-12 ">
          <input id="senderEmail" name="_replyto" type="text" class="form-control" required="required">
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="textarea" class="col-md-7 col-sm-12 col-form-label">Comments or Questions:</label>
        <div class="col-md-7 col-sm-12 ">
          <textarea id="textarea" name="message" cols="40" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-12 d-flex justify-content-center">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>-->

    <!-- contact form 7 version -->
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <form @submit.prevent="submitForm">
          <div class="container form-group row" :class="{ formEnlarge: enlargeFont }">
            <div>
              <label>
                First Name*
                <br>
                <span class="wpcf7-form-control-wrap firstname">
                  <input
                    v-model="fName"
                    type="text"
                    name="firstname"
                    size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                    aria-required="true"
                    aria-invalid="false"
                    required
                  >
                </span>
              </label>
            </div>
            <div>
              <label>
                Last Name*
                <br>
                <span class="wpcf7-form-control-wrap lastname">
                  <input
                    v-model="lName"
                    type="text"
                    name="lastname"
                    size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                    aria-required="true"
                    aria-invalid="false"
                    required
                  >
                </span>
              </label>
            </div>
          </div>

          <div class="container form-group row" :class="{ formEnlarge: enlargeFont }">
            <div>
              <label>
                Your Email*
                <br>
                <span class="wpcf7-form-control-wrap email">
                  <input
                    v-model="emailAddr"
                    type="email"
                    name="email"
                    size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                    aria-required="true"
                    aria-invalid="false"
                    required
                  >
                </span>
              </label>
            </div>
          </div>

          <div class="container form-group row" :class="{ formEnlarge: enlargeFont }">
            <div>
              <label>
                Phone
                <br>
                <span class="wpcf7-form-control-wrap phone">
                  <input
                    v-model="phone"
                    type="tel"
                    maxlength="12"
                    name="phone"
                    placeholder="123-456-7890"
                    size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel form-control"
                    aria-invalid="false"
                  >
                </span>
              </label>
            </div>
          </div>

          <div class="container form-group row" :class="{ formEnlarge: enlargeFont }">
            <div>
              <label>
                Company/Organization
                <br>
                <span class="wpcf7-form-control-wrap orgs">
                  <input
                    v-model="company"
                    type="text"
                    name="orgs"
                    size="40"
                    class="wpcf7-form-control wpcf7-text form-control"
                    aria-invalid="false"
                  >
                </span>
              </label>
            </div>
          </div>

          <div class="container form-group row" :class="{ formEnlarge: enlargeFont }">
            <div>
              <label>
                Your Message
                <br>
                <span class="wpcf7-form-control-wrap yourmessage">
                  <textarea
                    v-model="msgBody"
                    name="yourmessage"
                    cols="100"
                    rows="10"
                    class="wpcf7-form-control wpcf7-textarea form-control"
                    aria-invalid="false"
                  ></textarea>
                </span>
              </label>
            </div>
          </div>

          <transition name="slide-fade" mode="out-in">
            <p v-if="submitted">{{ success }}</p>
            <p v-if="errorSubmit">{{ failed }}</p>
          </transition>

          <div class="form-group row" :class="{ formEnlarge: enlargeFont }">
            <div class="col-12 d-flex">
              <button
                :class="{ formEnlarge: enlargeFont }"
                name="submit"
                type="submit"
                class="wpcf7-form-control wpcf7-submit btn btn-primary"
              >Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="card">
          <div class="card-header titleHeader">Seattle Business Resources</div>
          <div class="card-body">
            <ul>
              <li>
                <a
                  class="card-title"
                  href="http://www.seattle.gov/economicdevelopment/business-district-organizations-x76248"
                >Business District Organizations (Seattle)</a>
              </li>
              <li>
                <a
                  class="card-title"
                  href="http://www.seattle.gov/economicdevelopment"
                >Office of Economic Development, City of Seattle</a>
              </li>
              <li>
                <a
                  class="card-title"
                  href="https://www.spl.org/programs-and-services/business/business-resources"
                >Seattle Public Library Business Resources</a>
              </li>
              <li>
                <a
                  class="card-title"
                  href="https://www.sba.gov/offices/district/wa/seattle"
                >U.S. Small Business Administration, Seattle Office</a>
              </li>
              <li>
                <a
                  class="card-title"
                  href="http://wsbdc.org/"
                >Washington Small Business Development Center</a>
              </li>
              <li>
                <a
                  class="card-title"
                  href="http://www.seakingwdc.org/"
                >Workforce Development Council of Seattle-King County</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

Business District Organizations (Seattle)
Office of Economic Development, City of Seattle
Seattle Public Library Business Resources
U.S. Small Business Administration, Seattle Office
Washington Small Business Development Center
Workforce Development Council of Seattle-King County


<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "contact",
  props: ["enlargeFont"],
  data() {
    return {
      info: null,
      errors: [],
      fName: "",
      lName: "",
      emailAddr: "",
      phone: "",
      company: "",
      msgBody: "",
      submitted: false,
      errorSubmit: false,
      success: null,
      failed: null
    };
  },
  mounted() {},
  methods: {
    submitForm: function() {
      let formInfo = new FormData();
      formInfo.set("firstname", this.fName);
      formInfo.set("lastname", this.lName);
      formInfo.set("email", this.emailAddr);
      formInfo.set("phone", this.phone);
      formInfo.set("orgs", this.company);
      formInfo.set("yourmessage", this.msgBody);

      axios({
        method: "post",
        url:
          "https://agefriendlysea.wpengine.com/wp-json/contact-form-7/v1/contact-forms/215/feedback",
        data: formInfo,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      })
        .then(response => {
          //handle success
          this.submitted = true;
          this.success = response.data.message;
          this.fName = "";
          this.lName = "";
          this.emailAddr = "";
          this.phone = "";
          this.company = "";
          this.msgBody = "";
        })
        .catch(error => {
          //handle error
          this.errorSubmit = true;
          this.failed = error.data.message;
        });
    }
  }
};
</script>

<style scoped>
.contact {
  margin-top: 150px;
  margin-bottom: 150px;
  margin-left: 125px;
  margin-right: 125px;
}

@media (max-width: 768px) {
  .contact {
    margin-left: 50px;
    margin-right: 50px;
  }
}

.formEnlarge {
  font-size: calc(15px + 0.8vw);
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

li {
  font-size: calc(10px + 0.8vw);
  font-family: "DDINRegular";
}

.titleHeader {
  font-size: calc(12px + .8vw);
  font-family: "DDINRegular";
}
</style>
