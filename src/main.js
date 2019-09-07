import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/styles/style.scss'
import axios from 'axios'
import api from '@/service/api'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
