import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios';
import AuthService from './services/AuthService'
 


Vue.config.productionTip = false

Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
Axios.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Axios.interceptors.response.use( (response) => {
  // Return a successful response back to the calling service
  return response;
}, (error) => {
  console.log(JSON.stringify(error))
  // Catch network erros - for server is not available
  if(!error.response) {
    return new Promise((resolve, reject) => {
      reject(error)
    })
  }
  
  // Return any error which is not due to authentication back to the calling service
  if (error.response.status !== 401) {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  }

  // Logout user if token refresh didn't work or user is disabled
  if (error.config.url.includes('/v1/user/refresh-access-token')) {
    store.dispatch('logout');
    router.push('login');

    return new Promise((resolve, reject) => {
      reject(error);
    });
  }

  // Try request again with new token
  return AuthService.refreshJWTToken(store.state.refreshToken)
    .then((token) => {
      // New request with new token
      store.dispatch('refreshJWTToken',token);
      const config = error.config;
      config.headers['Authorization'] = `Bearer ${token}`;

      return new Promise((resolve, reject) => {
        Axios.request(config).then(response => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
      });

    })
    .catch((error) => {
      Promise.reject(error);
    });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
