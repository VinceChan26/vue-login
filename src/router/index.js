import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login';
import Dashboard from '@/components/dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
    }, {
      path: '/dashboard',
      component: Dashboard,
    },
  ],
});
