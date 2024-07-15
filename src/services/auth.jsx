import api from './api';

export const register = (user) => {
  return api.post('/auth/register', user).then(response => response.data);
};

export const login = (user) => {
  return api.post('/auth/login', user).then(response => response.data);
};
