<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">download CSV</el-menu-item>
      <el-menu-item index="2">Create New Account</el-menu-item>
      <el-menu-item index="3" @click="handleSignOut">Log Out</el-menu-item>
    </el-menu>
    <div v-if="activeIndex==1">
      <div class="employer-result">
        <el-button
          type="primary"
          @click="retreiveEmployer"
          :loading="employerLoading"
        >prepare employer test</el-button>
        <el-alert
          v-if="employer_no_data"
          title="Looks like there's no employer result submmited yet, try again later."
          type="warning"
        ></el-alert>
        <VueJsonToCsv
          class="dl"
          v-if="employer_titles"
          :labels="employer_titles"
          :json-data="employer_json_data"
          :csv-title="getEmployerTitle"
        >
          <el-button type="success">Download Ready</el-button>
        </VueJsonToCsv>
      </div>
      <div class="customer-result">
        <el-button
          type="primary"
          @click="retreiveCustomer"
          :loading="customerLoading"
        >prepare customer test</el-button>
        <el-alert
          v-if="customer_no_data"
          title="Looks like there's no customer result submmited yet, try again later."
          type="warning"
        ></el-alert>
        <VueJsonToCsv
          class="dl"
          v-if="customer_titles"
          :labels="customer_titles"
          :json-data="customer_json_data"
          :csv-title="getCustomerTitle"
        >
          <el-button type="success">Download Ready</el-button>
        </VueJsonToCsv>
      </div>
      <div class="download-employer-questions">
        <VueJsonToExcel
          class="dl"
          :data="employer_question"
          :name="'Employer_Questions_at_'+getDate+'.xls'"
        >
          <el-button type="success">Download Employer Test Question</el-button>
        </VueJsonToExcel>
      </div>
      <div class="download-customer-questions">
        <VueJsonToExcel
          class="dl"
          :data="customer_question"
          :name="'Customer_Questions_at_'+getDate+'.xls'"
        >
          <el-button type="success">Download Customer Test Question</el-button>
        </VueJsonToExcel>
      </div>
    </div>
    <div v-else-if="activeIndex==2">
      <form @submit.prevent="handleSubmit" class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Create A New Account</h1>

        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          v-model="email"
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        >

        <label for="inputFirstName" class="sr-only">First Name</label>
        <input
          v-model="firstName"
          type="text"
          id="inputFirstName"
          class="form-control"
          placeholder="First Name"
          required
        >

        <label for="inputLastName" class="sr-only">Last Name</label>
        <input
          v-model="lastName"
          type="text"
          id="inputLastName"
          class="form-control"
          placeholder="Last Name"
          required
        >

        <label for="inputUserName" class="sr-only">User Name</label>
        <input
          v-model="userName"
          type="text"
          id="inputUserName"
          class="form-control"
          placeholder="User Name"
          required
        >

        <label for="inputPassword" class="sr-only">Password</label>
        <input
          v-model="password"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        >

        <label for="inputPasswordConf" class="sr-only">Password Confirmation</label>
        <input
          v-model="passconf"
          type="password"
          id="inputPasswordConf"
          class="form-control"
          placeholder="Password Confirm"
          required
        >

        <el-alert v-if="passMatching" title="password doesn't match" type="error"></el-alert>
        <br>
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          :disabled="passMatching"
        >Sign Up</button>
      </form>
    </div>
  </div>
</template>
<script>
import VueJsonToCsv from "vue-json-to-csv";
import questions from "../loadingQuestions";
import VueJsonToExcel from "vue-json-excel";
const axios = require("axios");
export default {
  name: "mainPage",
  components: {
    VueJsonToCsv,
    VueJsonToExcel
  },
  data() {
    return {
      activeIndex: "1",
      employer_titles: null,
      employerLoading: false,
      employer_json_data: null,
      employer_no_data: false,
      customer_titles: null,
      customerLoading: false,
      customer_json_data: null,
      customer_no_data: false,
      employer_question: [],
      customer_question: [],
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      passconf: ""
    };
  },
  computed: {
    passMatching: function() {
      return this.password != this.passconf;
    },
    getCustomerTitle: function() {
      return "customer_get_at_" + this.getDate();
    },
    getEmployerTitle: function() {
      return "employer_get_at_" + this.getDate();
    },
    getDate: function() {
      let date = new Date();
      let monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      let day = date.getDate();
      let monthIndex = date.getMonth();
      let year = date.getFullYear();
      return year + "_" + monthNames[monthIndex] + "_" + day;
    }
  },
  methods: {
    retreiveEmployer: function() {
      this.employerLoading = true;
      this.employer_no_data = false;
      axios({
        method: "GET",
        url: "https://api.goagefriendly.org/v1/employer-result"
      })
        .then(res => {
          if (res.status == 200) {
            this.employerLoading = false;
            if (res.data.length == 1) {
              this.employer_no_data = true;
            } else {
              this.employerLoading = false;
              this.employer_titles = Object.assign(
                {},
                this.employer_titles,
                res.data[0]
              );

              this.employer_json_data = res.data.slice(1);
            }
          }
        })
        .catch(() => {
          this.employerLoading = false;
          this.$message.error("There's an error retrieving employer result");
        });
    },
    retreiveCustomer: function() {
      this.customerLoading = true;
      this.customer_no_data = false;
      axios({
        method: "GET",
        url: "https://api.goagefriendly.org/v1/customer-result"
      })
        .then(res => {
          if (res.status == 200) {
            this.customerLoading = false;
            if (res.data.length == 1) {
              this.customer_no_data = true;
            } else {
              this.customer_titles = Object.assign(
                {},
                this.customer_titles,
                res.data[0]
              );

              this.customer_json_data = res.data.slice(1);
            }
          }
        })
        .catch(() => {
          this.customerLoading = false;
          this.$message.error("There's an error retrieving customer result");
        });
    },
    handleSelect: function(key) {
      this.activeIndex = key;
    },
    handleSignOut: function() {
      axios({
        method: "DELETE",
        url: "https://api.goagefriendly.org/v1/sessions",
        headers: {
          user: localStorage.getItem("afbdashAuth")
        },
        withCredentials: true
      })
        .then(result => {
          if (result.status == 200) {
            this.$router.push("/");
          }
        })
        .catch();
    },
    handleSubmit: function() {
      if (!this.passMatching) {
        axios({
          method: "post",
          url: "https://api.goagefriendly.org/v1/users",
          data: {
            fName: this.firstName,
            lName: this.lastName,
            userName: this.userName,
            email: this.email,
            password: this.password
          },
          headers: {
            user: localStorage.getItem("afbdashAuth")
          },
          withCredentials: true
        })
          .then(res => {
            if (res.status == 201) {
              this.$message({
                message: "Successfully created account",
                type: "success"
              });
            }
          })
          .catch(err => {
            this.$message.error(err.response.data);
          });
      }
    },
    formatEmployerQuestion: function() {
      // debugger;
      let obj = {};
      for (let i = 1; i < questions.employerTest.length; i++) {
        let _questions = questions.employerTest[i].questions;
        for (let j = 0; j < _questions.length; j++) {
          let key = "s" + i + "q" + (j + 1);
          let value = _questions[j].title;
          obj[key] = value;
        }
      }
      this.$set(this.employer_question, 0, obj);
    },
    formatCustomerQuestion: function() {
      let obj = {};
      for (let i = 1; i < questions.customerTest.length; i++) {
        let _questions = questions.customerTest[i].questions;
        for (let j = 0; j < _questions.length; j++) {
          let key = "s" + i + "q" + (j + 1);
          let value = _questions[j].title;
          obj[key] = value;
        }
      }
      this.$set(this.customer_question, 0, obj);
    }
  },
  beforeMount() {
    axios({
      method: "get",
      url: "https://api.goagefriendly.org/v1/sessions",
      headers: {
        user: localStorage.getItem("afbdashAuth")
      },
      withCredentials: true
    })
      .then(res => {
        if (res.status == 200) {
          this.$router.push("/dashboard");
        } else {
          this.$router.push("/");
        }
      })
      .catch();
    this.formatEmployerQuestion();
    this.formatCustomerQuestion();
  }
};
</script>
<style scoped>
#backToMe {
  color: #fff;
  cursor: pointer;
}

.dl {
  margin-top: 30px;
}

.customer-result,
.employer-result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.download-employer-questions {
  margin-top: 30px;
}
</style>
