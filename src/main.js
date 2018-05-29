import Vue from 'vue'
import App from './App.vue'
import VueInitailList from './lib/index'
import 'amfe-flexible/index.js'
Vue.use(VueInitailList)
new Vue({
  el: '#app',
  render: h => h(App)
})
