import Vue from 'vue'
import App from './App.vue'
import VueInitialList from './lib/index'
import 'amfe-flexible/index.js'
Vue.use(VueInitialList)
new Vue({
  el: '#app',
  render: h => h(App)
})
