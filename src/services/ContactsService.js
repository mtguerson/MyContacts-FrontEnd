import HttpClient from './utils/HttpClient';

class ContactsServices {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.HttpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  getContactById(id) {
    return this.HttpClient.get(`contacts/${id}`);
  }

  createContact(contact) {
    return this.HttpClient.post('contacts', { body: contact });
  }
}

export default new ContactsServices();
