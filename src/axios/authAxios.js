import axios from 'axios';

export const API_URL = 'https://server-react-spring.herokuapp.com/api';

const AuthAPI = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export default AuthAPI;
