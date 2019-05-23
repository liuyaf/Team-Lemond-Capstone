import Vue from 'vue'
import Router from 'vue-router'

// import about from './views/About.vue'
import resources from './views/Resources.vue'
import contact from './views/ContactUs.vue'
import assessmentSelection from './views/AssessmentSelection'
import assessment from './components/Assessment.vue'
import notFound from './views/NotFound.vue'
import about from './views/About.vue'
import questions from './loadingQuestions'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'about',
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
      component: assessment,
      props: {
        TOA: questions.TOA,
        sections: questions.customerTest,
        generalTips: questions.customerGeneralTips,
        testType: "customer"
      }
    },
    {
      path: '/employer-assessment-self-assessment',
      name: 'employer-test',
      component: assessment,
      props: {
        TOA: questions.TOA,
        sections: questions.employerTest,
        generalTips: questions.customerGeneralTips,
        testType: "employer"
      }

    },
    {
      path: '*',
      name: 'notFound',
      component: notFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: {
          x: 0,
          y: 150
        }
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})