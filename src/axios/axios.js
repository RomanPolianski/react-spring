import axios from 'axios';

export const API_URL = 'https://server-react-spring.herokuapp.com/api';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
