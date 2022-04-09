import AuthAPI from '../axios/authAxios';

export default class ProjectService {
  static async getProjects() {
    return AuthAPI.get('/projects');
  }

  static async getSearchProjects(title) {
    return AuthAPI.get(`/projects/${title}`);
  }
}
