import $api from '../axios';

export default class AuthService {
  static async login(userName, password) {
    return $api.post('/login', { userName, password });
  }
}
