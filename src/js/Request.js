export default class Request {
  static url = 'https://djreactive-heroku.herokuapp.com:7070';

  static xhr = null;

  static callback = null;

  static inProcess = false;

  static create(method, url, callback, formData = null) {
    if (this.inProcess) return;

    /*
      VALIDATOR HERE
    */

    this.callback = callback;
    this.xhr = new XMLHttpRequest();
    this.xhr.open(method, `${this.url}/?method=${url}`, true);
    switch (url) {
      case 'editTicket':
      case 'removeTicket':
      case 'createTicket':
        // this.xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        this.xhr.send(formData);
        break;
      default:
        this.xhr.send();
        break;
    }
    this.inProcess = true;
    this.xhr.addEventListener('load', () => Request.#waitResponse());
  }

  static #waitResponse() {
    const { xhr } = this;
    let data = null;
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        data = JSON.parse(xhr.responseText);
      } catch (e) {
        console.error(e);
      }
      return setTimeout(() => {
        this.xhr = null;
        this.inProcess = false;
        if (!data.error) this.callback(data.result);
        else throw new Error(data.error);
      }, 500); // имитация загрузки
    }
    return null;
  }
}
