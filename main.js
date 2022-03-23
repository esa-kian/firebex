import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/Fonts/Font.css'
import '@/style/style.scss'
import '@/style/bootstrap-grid-rtl.css'

Vue.config.productionTip = false

import '@/lib/state'
import '@/lib/axios'
import '@/lib/globalConstants'
import '@/lib/globalFunctions'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
