// alurapic/src/main.js

import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

// importando o router!
import VueRouter from 'vue-router';


Vue.use(VueResource); 
Vue.use(VueRouter);
// registrando o router

new Vue({
  el: '#app',
  render: h => h(App)
})
