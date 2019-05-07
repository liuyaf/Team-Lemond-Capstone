import Vue from 'vue'
import Router from 'vue-router'

// import assessment components here


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import(/* webpackChunkName: "resources" */ './views/Resources.vue')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/ContactUs.vue')
    },
    {
      path: '/customer-service-self-assessment'
    },
    {
      path: '/employer-assessment-self-assessment'
    }
  ]
})
