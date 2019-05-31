import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Main from "./components/Main.vue";
import Learn from "./components/Learn.vue"
import See from "./components/See.vue"


Vue.config.productionTip = false


// Vue.use(UIkit)
UIkit.use(Icons);
Vue.use(VueRouter);




const routes = [
  // { path: '/users/:teamId', component: Users },
  { path: '/', component: Main },
  { path: '/Learn', component: Learn },
  { path: '/See', component: See },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
