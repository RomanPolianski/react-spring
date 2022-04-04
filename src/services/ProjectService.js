import AuthAPI from '../axios/authAxios';

export default class ProjectService {
  static async getProjects() {
    return AuthAPI.get('/projects');
  }
}
