// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import router from './router'
import './common/css/base.css'
import './common/css/header.css'
import './common/css/recommend.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueLazyLoad, {
  loading: require('./base/load/loading.gif')
})
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
