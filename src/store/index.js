/* eslint global-require: 0 */
import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    auth,
  },
});

if (module.hot) {
  module.hot.accept([
    './modules/auth',
  ], () => {
    store.hotUpdate({
      modules: {
        auth: require('./modules/auth').default,
      },
    });
  });
}

export default store;
