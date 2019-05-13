import Vue from 'vue'
import App from './App.vue'
import VueCountdown from '@chenfengyuan/vue-countdown';
import VueUi from '@vue/ui'

Vue.use(VueUi);
Vue.component(VueCountdown.name, VueCountdown);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
