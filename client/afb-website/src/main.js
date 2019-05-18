import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

// back to top button installed through npm 
// more info can be found here: https://github.com/caiofsouza/vue-backtotop
import BackToTop from 'vue-backtotop'
Vue.use(BackToTop);

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')