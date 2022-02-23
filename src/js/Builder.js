import Request from './Request';
import AppFunc from './AppFunc';

export default class Builder {
  constructor() {
    this.loaders = {};
    this.tickets = [];
    this.editIcon = '\u{270E}';
    this.isOpenModal = false;
    this.divTickets = document.getElementById('widjet').querySelector('.tickets');
    this.createBut = document.querySelector('.ticket__add');
    this.modalCrEdit = document.querySelector('.modal__create');
    this.formCrEdit = document.getElementById('create-edit');
    this.modalRemove = document.querySelector('.modal__remove');
    this.formRemove = document.getElementById('remove-ticket');
  }

  init() {
    this.createBut.addEventListener('click', () => this.modalCreateEdit());

    this.addLoader('ticket', this.divTickets);
    this.buildTickets = this.buildTickets.bind(this);
    Request.create('GET', 'allTickets', this.buildTickets);
  }

  buildTickets(data) {
    this.tickets = data;
    this.divTickets.innerHTML = '';
    this.tickets.forEach((t) => {
      const ticket = document.createElement('div');
      const input = (t.status) ? '\u{2713}' : '\u{2717}';
      ticket.setAttribute('class', 'ticket flex');
      ticket.dataset.id = t.id;
      ticket.innerHTML = `
        <div class="ticket__status ${t.status ? 'complete' : 'in_work'}">${input}</div>
        <div class="ticket__name">${t.name}</div>
        <div class="ticket__created">${AppFunc.getFormatedDate(t.created)}</div>
        <div class="ticket__control">
          <button class="button" data-control="edit">${this.editIcon}</button>
          <button class="button" data-control="remove">\u{1F5D9}</button>
        </div>
      `;
      this.divTickets.appendChild(ticket);

      // Full Information
      ticket.addEventListener('click', (e) => {
        if (this.isLoader('ticketFull') || this.isOpenModal
        || e.target === e.currentTarget.querySelector('button')) return;

        const el = ticket.querySelector('.ticket__full');
        if (!el) {
          const block = document.createElement('div');
          block.classList.add('ticket__full');
          ticket.querySelector('.ticket__name').appendChild(block);
          this.addLoader('ticketFull', block);
          Request.create('GET', `ticketById&id=${t.id}`, (objData) => {
            this.removeLoader('ticketFull');
            block.textContent = objData.description;
          });
        } else el.remove();
      });
      // Edit Button
      ticket.querySelector('[data-control=edit]').addEventListener('click', (e) => {
        if (this.isLoader('editor') || this.isOpenModal) return;
        e.target.textContent = '';
        this.addLoader('editor', e.target, 19);
        this.modalCreateEdit = this.modalCreateEdit.bind(this);
        Request.create('GET', `ticketById&id=${t.id}`, this.modalCreateEdit);
      });
      // Remove Button
      ticket.querySelector('[data-control=remove]').addEventListener('click', () => {
        this.modalDelete(ticket, t.name);
      });
    });
    this.removeLoader('ticket');
  }

  modalCreateEdit(data = null) {
    if (this.isOpenModal) return;

    const createBut = document.createElement('button');
    createBut.classList.add('button');
    createBut.textContent = (data) ? 'Изменить' : 'Создать';
    createBut.setAttribute('type', 'submit');
    const closeBut = document.createElement('button');
    closeBut.classList.add('button');
    closeBut.textContent = 'Отмена';

    if (data) {
      this.getParentLoader('editor').textContent = this.editIcon;
      this.modalCrEdit.querySelector('#ticket-name').value = data.name;
      this.modalCrEdit.querySelector('#ticket-description').value = data.description;
      this.removeLoader('editor');
    }

    this.isOpenModal = true;
    this.modalCrEdit.querySelector('.modal__title').textContent = (data) ? 'Редактирование тикета' : 'Создание тикета';
    this.modalCrEdit.style.display = 'block';
    this.formCrEdit.querySelector('.buttons').appendChild(closeBut);
    this.formCrEdit.querySelector('.buttons').appendChild(createBut);

    closeBut.addEventListener('click', (e) => {
      e.preventDefault();
      this.hideModal(this.modalCrEdit, createBut, closeBut);
    });
    this.formCrEdit.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(this.formCrEdit);
      if (data !== null) formData.append('id', data.id);
      Request.create('POST', (data !== null) ? 'editTicket' : 'createTicket',
        this.buildTickets, formData);
      this.hideModal(this.modalCrEdit, createBut, closeBut);
    });
  }

  modalDelete(ticket, name) {
    if (this.isOpenModal) return;

    const removeBut = document.createElement('button');
    removeBut.classList.add('button');
    removeBut.textContent = 'Удалить';
    removeBut.setAttribute('type', 'submit');
    removeBut.dataset.id = ticket.dataset.id;
    const closeBut = document.createElement('button');
    closeBut.classList.add('button');
    closeBut.textContent = 'Отмена';

    this.modalRemove.querySelector('.modal__title').textContent = 'Удаление тикета';
    this.modalRemove.querySelector('.modal__message').innerHTML = `Вы действительно хотите удалить тикет <p>"${name}"</p>?`;
    this.formRemove.querySelector('.buttons').appendChild(closeBut);
    this.formRemove.querySelector('.buttons').appendChild(removeBut);
    this.modalRemove.style.display = 'block';

    closeBut.addEventListener('click', (e) => {
      e.preventDefault();
      this.hideModal(this.modalRemove, removeBut, closeBut);
    });
    this.modalRemove.addEventListener('submit', (e) => {
      e.preventDefault();
      const { id } = e.target.querySelector('button[type=submit]').dataset;
      const formData = new FormData();
      formData.append('id', id);
      Request.create('POST', 'removeTicket', this.buildTickets, formData);
      this.hideModal(this.modalRemove, removeBut, closeBut);
    });
    this.isOpenModal = true;
  }

  hideModal(modal, ...remove) {
    modal.style.display = 'none';
    modal.querySelector('form').reset();
    this.isOpenModal = false;
    Array.from(remove).forEach((r) => r.remove());
  }

  addLoader(name, position, size = null) {
    this.removeLoader(name);
    const img = document.createElement('img');
    img.classList.add('loader');
    img.setAttribute('src', 'images/tail-spin.svg');
    if (size) img.style.width = `${size}px`;
    this.loaders[name] = img;
    position.appendChild(img);
  }

  isLoader(name) {
    return !!(this.loaders[name]);
  }

  getParentLoader(name) {
    return this.loaders[name].parentNode;
  }

  removeLoader(name) {
    if (this.loaders[name]) {
      this.loaders[name].remove(); delete this.loaders[name];
    }
  }
}
