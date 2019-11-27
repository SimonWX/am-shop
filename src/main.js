import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

// vant 全量引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// vant 按需引入
import { Button } from 'vant';
import { Icon } from 'vant';
Vue.use(Button).use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
