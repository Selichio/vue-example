import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    token: '',
    user: {},
    refreshToken: ''
  };
};

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  getters: {
    getToken: state => {
      return state.token
    },
    getUser: state => {
      return state.user
    },
    getRefreshToken: state => {
      return state.refreshToken
    }
  },
  state: getDefaultState(),
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_REFRESHTOKEN: (state, refreshToken) => {
      state.refreshToken = refreshToken;
    },
    RESET: state => {
      Object.assign(state, getDefaultState());
    }
  },
  actions: {
    login: ({commit}, {token, user, refreshToken}) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);
      commit('SET_REFRESHTOKEN',refreshToken);
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    refreshJWTToken: ({commit}, refreshToken) => {
      console.log(refreshToken)
        commit('SET_TOKEN', refreshToken);
    },
    logout: ({commit}) => {
      commit('RESET', '');
    }
  },
  modules: {
  }
})
