import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }
    await delay(500);

    if (response.ok) {
      return body;
    }

    throw new Error(
      body?.error || `${response.status}: ${response.statusText}`,
    );
  }
}

export default HttpClient;
