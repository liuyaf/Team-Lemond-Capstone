import Vue from 'vue'
import Router from 'vue-router'

// import about from './views/About.vue'
import resources from './views/Resources.vue'
import contact from './views/ContactUs.vue'
import assessmentSelection from './views/AssessmentSelection'
import assessment from './components/Assessment.vue'
import notFound from './views/NotFound.vue'
import about from './views/About.vue'

// import assessment components here

const TOA = {
  id: "toa",
  // name: "terms of agreement",
  title: "Assessment Terms of Agreement",
  content: [{
      title: "Terms of Agreement and Condition",
      content: "<p>The Age Friendly Business website and assessments may contain links to third-party sites that are not owned and we cannot control. We assume no responsibility for the content, privacy policies, or practices of any third part websites or services. By acknowledging that you have received this information, you are agreeing that Age Friendly Business and the City of Seattle shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any content, goods, or services available on or through this website.</p>"
    },
    {
      title: "Changes",
      content: "<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>"
    },
    {
      title: "Information & Privacy",
      content: '<p>Your assessment score, personal information, and details about your business will not be stored. If you wish to keep your assessment score and related tips or resources, please save the material as a PDF or JPG before you leave the page. \nIf you have comments or questions about content or functionality of this website, you are welcome to e-mail <a href = "mailto: agefriendly@seattle.gov">agefriendly@seattle.gov</a>. Please include a link to the specific webpage.</p>'
    }
  ]

}

const businessInfo = {
  sectionID: 1,
  sectionTitle: "Business information",
  questions: [{
      questionID: 1,
      type: "dropdown",
      title: "What's your business type?",
      options: [{
        value: "Agriculture/Forestry/Maritime",
        label: "Agriculture/Forestry/Maritime"
      }, {
        value: "Construction",
        label: "Construction"
      }, {
        value: "Education",
        label: "Education"
      }, {
        value: "Finance/Insurance/Legal/Real Estate",
        label: "Finance/Insurance/Legal/Real Estate"
      }, {
        value: "Government/Public Sector",
        label: "Government/Public Sector"
      }, {
        value: "Health Care/Human Services",
        label: "Health Care/Human Services"
      }, {
        value: "Manufacturing",
        label: "Manufacturing"
      }, {
        value: "Nonprofit Organization",
        label: "Nonprofit Organization"
      }, {
        value: "Restaurant/Food Service/Bar",
        label: "Restaurant/Food Service/Bar"
      }, {
        value: "Retail",
        label: "Retail"
      }, {
        value: "Technology/Communications",
        label: "Technology/Communications"
      }, {
        value: "Transportation/Utilities",
        label: "Transportation/Utilities"
      }, {
        value: "Wholesale",
        label: "Wholesale"
      }, {
        value: "Other",
        label: "Other"
      }]
    },
    // {
    //   questionID: 2,
    //   type: "dropdown",
    //   title: "How many employees does your business have?",
    //   options: [{
    //       value: "0 employees (self-employed)",
    //       label: "0 employees (self-employed)"
    //     },
    //     {
    //       value: "1–9 employees",
    //       label: "1–9 employees"
    //     }, {
    //       value: "10–49 employees",
    //       label: "10–49 employees"
    //     }, {
    //       value: "50–249 employees",
    //       label: "50–249 employees"
    //     }, {
    //       value: "250–499 employees",
    //       label: "250–499 employees"
    //     }, {
    //       value: "500 or more employees",
    //       label: "500 or more employees"
    //     }
    //   ]
    // },
    // {
    //   questionID: 3,
    //   type: "input",
    //   title: "What's your business's zipcode?",
    // }
  ]
}
const sections = [businessInfo,
  //  {
  //   sectionID: 2,
  //   sectionTitle: "Workforce Planning",
  //   questions: [{
  //       questionID: 1,
  //       type: "radio",
  //       title: "Do you know the age profile of your workforce and what percentage of your employees is age 50+?",
  //       questionContent: {
  //         yes: "Excellent—this is important information for both employee retention and succession planning. ",
  //         no: "Experienced workers carry institutional knowledge and wisdom that is beneficial to your organization."
  //       }
  //     },
  //     {
  //       questionID: 2,
  //       type: "radio",
  //       title: "Do you have a method to get feedback about the needs and interests of mature and other workers?",
  //       questionContent: {
  //         yes: "Great—it’s always good to know what motivates your employees.",
  //         no: "Sometimes the best course of action is to just ask! "
  //       }
  //     },
  //     {
  //       questionID: 3,
  //       type: "radio",
  //       title: "Have you determined the timing and impact of retirements and identified knowledge gaps to be filled?",
  //       questionContent: {
  //         yes: "Excellent—with this information, you can invite older employees to share and contribute knowledge during their remaining years in your organization.",
  //         no: "Don’t miss the opportunity to involve older employees in planning for their eventual transition. "
  //       }
  //     }
  //   ]
  // },
  // {
  //   sectionID: 3,
  //   sectionTitle: "Flexible Work Arrangements",
  //   questions: [{
  //       questionID: 1,
  //       type: "radio",
  //       title: "Do you have flexible work arrangements that give employees increased control over work hours or location?",
  //       questionContent: {
  //         yes: "Excellent — flexibility will help you retain the wisdom and experience of older workers.",
  //         no: "Older workers have wisdom and experience that is valuable to your organization. Flexibility is essential for retention."
  //       }
  //     },
  //     {
  //       questionID: 2,
  //       type: "radio",
  //       title: "Do you offer transitional work options for retirement-eligible employees such as lateral transfers, bridge employment, or phased retirement?",
  //       questionContent: {
  //         yes: "Great — you recognize the value of your older employees’ wisdom and experience.",
  //         no: "Older workers have wisdom and experience that is valuable to your organization. Flexibility is essential for retention."
  //       }
  //     },
  //     {
  //       questionID: 3,
  //       type: "radio",
  //       title: "Do you have postretirement work options such as consulting or temporary work?",
  //       questionContent: {
  //         yes: "Very good — short-term rehiring can save a fortune on training costs!",
  //         no: "This would be good to consider since it saves on onboarding and training costs."
  //       }
  //     }
  //   ]
  // }, {
  {
    sectionID: 4,
    sectionTitle: "Training and Learning Opportunities",
    questions: [{
      questionID: 1,
      type: "radio",
      title: "1Do you have training programs to keep employee’ s technical and computer skills current?",
      questionContent: {
        yes: " Glad to hear it! Training keeps the work fresh and new.",
        no: "Consider how training programs can keep employees at the top of their game. "
      }
    }, {
      questionID: 2,
      type: "radio",
      title: "2Do older workers have equal access to training programs and promotional opportunities ? ",
      questionContent: {
        yes: "Excellent — we hope you tap older employees with on-the-job experience, transferable skills, and proven commitment to your organization. ",
        no: "Too many employers forget that on-the-job experience can often outweigh education or forget to look for transferable skills and lateral job opportunities. "
      }
    }, {
      questionID: 3,
      type: "radio",
      title: "3Do you have programs to capitalize on the experience of older workers? (e.g. Mentorships, Job rotation, Knowledge transfer training)",
      questionContent: {
        yes: "Great — you recognize the value of your older employees’ wisdom and experience. ",
        no: "Consider how valuable on-the-job experience can be transferred to younger staff."
      }
    }, {
      questionID: 4,
      type: "radio",
      title: "4Do you provide financial and retirement planning information to retirement - eligible employees ? ",
      questionContent: {
        yes: "Glad to hear it — helping older workers ease into retirement on their own terms reduces stress in the workplace. ",
        no: "It’s a win-win when you help older employees ease into retirement on their own terms. "
      }
    }, {
      questionID: 5,
      type: "radio",
      title: "5Do you offer employees information about or connections with community service opportunities ? ",
      questionContent: {
        yes: "Excellent — this effort benefits you through staff satisfaction and community good will. ",
        no: "When your employees get involved in community service that they enjoy, it builds good will— theirs and the community’ s. "
      }

    }]
  },
  // {
  //   sectionTitle: "section 5",
  //   questions: []
  // },
  // { sectionTitle: "section 6", questions: [] }
]

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
        TOA: TOA,
        sections: sections
      }
    },
    {
      path: '/employer-assessment-self-assessment',
      name: 'employer-test',
      component: assessment,
      props: {
        TOA: TOA,
        sections: sections
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
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})