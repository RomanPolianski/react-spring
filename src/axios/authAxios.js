import axios from 'axios';

export const API_URL = 'http://localhost:3001/api';

const AuthAPI = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export default AuthAPI;
