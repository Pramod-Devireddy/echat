import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  vuetify,
}).$mount('#app')
