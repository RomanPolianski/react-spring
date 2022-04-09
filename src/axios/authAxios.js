import axios from 'axios';

export const API_URL = 'http://localhost:5000/api';

const AuthAPI = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export default AuthAPI;
