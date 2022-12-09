import axios from 'axios';

const baseURL = 'http://localhost:8001/api';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});
