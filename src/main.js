import Vue from 'vue'
import Index from './Index.vue'
import router from './router'

export const EventService = new Vue();

Vue.config.productionTip = false

const App = new Vue({
  router,
  components: {
  },
  render: h => h(Index)
})

App.$mount('#app')