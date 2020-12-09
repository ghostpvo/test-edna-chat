import Vue from 'vue'
import App from './App.vue'

// Edna threads widget chat
import "threads-sdk-web-gate/threadswidget-3.31.0.min.css";
import "threads-sdk-web-gate/threadswidget-3.31.0.min";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
