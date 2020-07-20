import Vue from 'vue'
import App from './App.vue'
import Vue2TouchEvents from 'vue2-touch-events'
Vue.config.productionTip = false
Vue.use(Vue2TouchEvents)

export const eventBus = new Vue()

new Vue({
  render: h => h(App)
}).$mount('#app')
