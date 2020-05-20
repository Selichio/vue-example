// src/services/AuthService.js

import axios from 'axios';
import Store from '../store/index'

const url = 'http://localhost:3000/v1/';

export default {
  login(credentials) {
    delete axios.defaults.headers.common["Authorization"]
    return axios
      .post(url + 'user/login/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url + 'sign-up/', credentials)
      .then(response => response.data);
  },
  isValidLogin() {
    const token = Store.getters.getToken
    console.log(token)
    if (!token) {
      console.log("couldn't get token")
      return false;
    }
    const parsedToken = parseJwt(token)
    if (!parsedToken) {
      console.log("couldn't parse token")
      console.log(parsedToken)
      return false;
    }
    console.log(parsedToken.exp)
    const now = Math.round((new Date()).getTime() / 1000);
    console.log(now)
    if (now > parsedToken.exp) {
      console.log("expired")
      return false
    } else {
      return true
    }
  },
  refreshJWTToken(refreshToken) {
    delete axios.defaults.headers.common["Authorization"]
    console.log("POST user/refresh-access-token")
    const refreshTokenObj = {
      "refreshToken": refreshToken
    }
    return axios
      .post(url + 'user/refresh-access-token/', refreshTokenObj)
      .then(response => response.data.accessToken);
  }

};

 


function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}