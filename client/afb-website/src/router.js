import Vue from 'vue'
import Router from 'vue-router'

import about from './views/About.vue'
import resources from './views/Resources.vue'
import contact from './views/ContactUs.vue'
import assessmentSelection from './views/AssessmentSelection'
import assessment from './components/Assessment.vue'

// import assessment components here


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: about
    },
    {
      path: '/resources',
      name: 'resources',
      component: resources
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: contact
    },
    {
      path: '/assessment-selection',
      name: 'selection',
      component: assessmentSelection
    },
    {
      path: '/customer-service-self-assessment',
      name: 'customer-service-test',
      component: assessment
    },
    {
      path: '/employer-assessment-self-assessment',
      name: 'employer-test',
      component: assessment
    }
  ]
})