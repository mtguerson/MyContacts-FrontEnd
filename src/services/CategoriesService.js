import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories() {
    return this.HttpClient.get('/categories');
  }
}

export default new CategoriesService();
