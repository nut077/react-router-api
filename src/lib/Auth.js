import Cookies from 'js-cookie';

function getTokenFromHeaders(headers) {
  return headers.authorization;
}

function setToken(headers) {
  Cookies.set('access-token', getTokenFromHeaders(headers));
}

function getToken() {
  return Cookies.get('access-token');
}

function removeToken() {
  Cookies.remove('access-token');
}

export default {
  getToken,
  setToken,
  removeToken
};
