import { API_URL } from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {
      console.error('Error de respuesta:', error.response.data);
      console.error('Status:', error.response.status);
    } else if (error.request) {
      console.error('Error de petición:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
