import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login';
import Dashboard from '@/components/dashboard';
import { isEmpty } from 'lodash';
import { getToken } from '@/directive/auth';

Vue.use(Router);

export default (store) => {
  const token = getToken();
  if (store.state.auth.token !== token) {
    store.dispatch('auth/setToken', token);
  }

  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/login',
        component: Login,
      }, {
        path: '/',
        component: Dashboard,
        meta: {
          requiresAuth: true,
        },
      },
    ],
    scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
  });

  router.beforeEach(async (to, from, next) => {
    const { token, user } = store.state.auth;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // TODO: use store dispatch to get user information
    if (token && isEmpty(user)) {
      await store.dispatch('auth/getAuthUser');
    }

    if (token && (to.path === '/login' || to.path === '/') && !isEmpty(user)) {
      next();
    } else if (!token && requiresAuth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  });

  return router;
};
