import Card from './Card.js';
export default class AmazingCard extends Card {
  constructor(container, number, action) {
    super(container, number, action)
  };

  createElement(container, cardNumber, action) {
    super.createElement(container, cardNumber, action);
    this._cardNumber = cardNumber;

    this.card.textContent = '';
    this.card.append(this.cardImg);
  };

  set cardNumber(value) {

      this._cardNumber = value;
      this.cardImg = document.createElement('img');
      this.cardImg.classList.add('img');
      const imgPath = `./img/${value}.jpg`;
      this.cardImg.src = imgPath;

      this.cardImg.onerror = () => {
        this.cardImg.src = './img/default.jpg';
        throw new Error('Не удалось загрузить картинку')
      }

  }

  get cardNumber() {
    return this._cardNumber;
  }
}
