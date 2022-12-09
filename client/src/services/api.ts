import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
});
