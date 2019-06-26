import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store.js'; // export default가 아니기 때문에 중괄호가 필요.

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
