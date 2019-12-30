import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.axios.defaults.baseURL = `http://127.0.0.1:8888/api/private/v1/`

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
