import Vue from 'vue'
import App from './App.vue'
import vueInitialList from './lib/index.js'
Vue.use(vueInitialList)
Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount('#app')