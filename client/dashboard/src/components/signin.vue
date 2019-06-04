<template>
  <div>
    <form class="form-signin" @submit.prevent="handleSignIn">
      <h1
        class="h3 mb-3 font-weight-normal"
      >Welcome to Age Friendly Business staff dashboard, please sign in</h1>
      <label for="inputUserName" class="sr-only">Email address</label>
      <input
        v-model="userName"
        type="text"
        id="inputUserName"
        class="form-control"
        placeholder="username"
        required
        autofocus
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
      <br>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <span class="lead">New user? please contact administrator for access.</span>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signin",
  props: {
    msg: String
  },
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    handleSignIn: function() {
      axios({
        method: "post",
        url: "https://api.goagefriendly.org/v1/sessions",
        data: {
          userName: this.userName,
          password: this.password
        },
        withCredentials: true
      })
        .then(res => {
          if (res.status == 201) {
            let auth = res.headers.user;
            localStorage.setItem("afbdashAuth", auth);
            this.$router.push("/dashboard");
          }
        })
        .catch(err => {
          this.$message.error({
            message: err.response.data
          });
        });
    },
    checkIfLoggedIn: function() {
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
          }
        })
        .catch(err => {
          this.$message.error({
            message: err.response.data
          });
        });
    }
  },
  mounted() {
    this.checkIfLoggedIn();
  }
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
