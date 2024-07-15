import axios from 'axios';

const api = axios.create({
  baseURL: "https://evalc-3.onrender.com",
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);  // Log errors
    return Promise.reject(error);
  }
);

export default api;
