import {
  login,
  logout,
  getAuthUser,
} from '@/api/auth';
import { setToken, removeToken } from '@/directive/auth';

const state = {
  request: false,
  failure: null,
  token: '',
  user: {},
};

const mutations = {
  AUTH_REQUEST: (state) => {
    state.request = true;
  },
  AUTH_SUCCESS: (state, { token, user }) => {
    state.request = false;
    state.failure = null;
    state.token = token;
    state.user = user;
  },
  AUTH_FAILURE: (state, error) => {
    state.request = false;
    state.failure = error.response.data.code;
  },
  CLEAR_USER: (state) => {
    state.token = null;
    state.user = {};
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
};

const actions = {
  login: async ({ commit }, form) => {
    commit('AUTH_REQUEST');
    try {
      const { data } = await login({ ...form });
      commit('AUTH_SUCCESS', data.result);
      setToken(data.result.token);
      return true;
    } catch (error) {
      commit('AUTH_FAILURE', error);
    }
    return false;
  },
  logout: async ({ dispatch }) => {
    await logout();
    dispatch('clearUser');
    return true;
  },
  setToken: ({ commit }, token) => {
    commit('SET_TOKEN', token);
  },
  clearUser: ({ commit }) => {
    commit('CLEAR_USER');
    removeToken();
  },
  getAuthUser: async ({ commit }) => {
    const { data } = await getAuthUser();
    commit('SET_USER', data.result.user);
  },
};

const getters = {
  username: state => state.user.name,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
