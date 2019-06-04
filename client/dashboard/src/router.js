import Vue from 'vue'
import Router from 'vue-router'

// import signin from "./components/SignIn.vue"
import signin from "./components/signin.vue"
import dashboard from "./components/dashboard.vue"

Vue.use(Router);


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'signin',
        component: signin
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    }]
})