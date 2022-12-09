import Cookies from 'js-cookie';
import axios from 'axios';

const baseURL = 'http://localhost:8001/api';
const token = Cookies.get('auth_token');
const api = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default api;
