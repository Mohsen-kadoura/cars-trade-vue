import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
  		return {x: 0, y: 0};
  	}
});


 new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
