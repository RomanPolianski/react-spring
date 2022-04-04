/* eslint-disable import/no-named-as-default */
import AuthAPI from '../axios';

export default class ProjectService {
  static async getProjects() {
    return AuthAPI.get('/projects');
  }
}
