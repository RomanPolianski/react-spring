import AuthAPI from '../axios/authAxios';
import instance from '../axios/axios';

export default class AuthService {
  static async login(userName, password) {
    return instance.post('/login', { userName, password });
  }

  static async signUp(userName, password, repeatPassword, firstName, lastName, age) {
    return instance.post('/registration', {
      userName, password, repeatPassword, firstName, lastName, age,
    });
  }

  static async refreshToken() {
    return AuthAPI.get('/refresh-token');
  }
}
