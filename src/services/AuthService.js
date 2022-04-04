import $api from '../axios';

export default class AuthService {
  static async login(userName, password) {
    return $api.post('/login', { userName, password });
  }

  static async signUp(userName, password, repeatPassword, firstName, lastName, age) {
    return $api.post('/registration', {
      userName, password, repeatPassword, firstName, lastName, age,
    });
  }
}
