import Vue from 'vue'
import App from './App.vue'
import VueInitialList from 'vue-initial-list'
Vue.use(VueInitialList)

new Vue({
  el: '#app',
  render: h => h(App)
})
