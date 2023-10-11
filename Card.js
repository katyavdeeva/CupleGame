export default class Card {
  _open = false
  _success = false

  constructor(container, number, action) {
    this.container = container;
    this.cardNumber = number;
    this.createElement(container, number, action);
  };

  createElement(container,cardNumber, action) {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.card.textContent = cardNumber;
    container.append(this.card);

    this.card.addEventListener('click', () => {
      if (this.open == false && this.success == false) {
        this.open = true;
        action(this);
      }
    })
    return this.card;
  };

  set cardNumber(value) {
    this._cardNumber = value;
  }

  get cardNumber() {
    return this._cardNumber;
  }

  set open(value) {
    this._open = value;
    value ? this.card.classList.add('open') : this.card.classList.remove('open')
  }
  get open() {
    return this._open;
  }

  set success(value) {
    this._success = value;
    value ? this.card.classList.add('success') : this.card.classList.remove('success')
  }

  get success() {
    return this._success;
  }
}
