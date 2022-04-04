import axios from 'axios';

export const API_URL = 'http://localhost:3001/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default $api;
