/* Axios interceptor */
import axios from 'axios';
import { defaultTo, includes } from 'lodash';
import app from '@/main';

axios.defaults.baseURL = process.env.API_HOST;

export default (store, router) => {
  axios.interceptors.request.use((config) => {
    if (window.location.pathname !== '/login' && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${store.state.auth.token}`;
    }

    return config;
  }, error => Promise.reject(error));

  axios.interceptors.response.use(response => response, (error) => {
    const redirect = defaultTo(router.history.current.query.redirect, window.location.pathname);

    if (error.message === 'Network Error') {
      router.push({
        path: '/network_error',
        query: { redirect },
      });

      return Promise.resolve();
    }

    if (error.response) {
      const { status, data } = error.response;
      const hasTokenError = includes(['token_expired', 'token_invalid'], data.error);
      const hasStatusCodeError = includes([401, 403], status);
      if (hasTokenError && hasStatusCodeError) {
        store.dispatch('auth/clearUser');
        store.dispatch('management/account/closeModal');

        router.push({
          path: '/login',
          query: { redirect },
        });

        app.$message({
          message: app.$t('error.login_timeout'),
          type: 'warning',
        });

        return Promise.resolve();
      }
    }

    return Promise.reject(error);
  });
};
