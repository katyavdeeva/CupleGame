// import Card from './Card.js';
import AmazingCard from './AmazingCard.js'

window.addEventListener('DOMContentLoaded', () => {
  const startGame = document.createElement('button')
  startGame.classList.add('btn')
  startGame.textContent = 'Сыграть еще раз'
  document.querySelector('.contain').append(startGame);


  function newGame(container, cardsCount) {
    let cardsNumberArray = [],
      cardsArray = [],
      firstCard = null,
      secondCard = null;

    const button = document.createElement('button')
    button.classList.add('btn')
    button.textContent = 'Сыграть еще раз'


    for (let i = 1; i <= cardsCount / 2; i++) {
      cardsNumberArray.push(i)
      cardsNumberArray.push(i)
    }
    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)

    for (const cardNumber of cardsNumberArray) {
      cardsArray.push(new AmazingCard(container, cardNumber, flip))
    }

    function flip(card) {
      if (firstCard !== null && secondCard !== null) {
        if (firstCard.cardNumber !== secondCard.cardNumber) {
          firstCard.open = false;
          secondCard.open = false;
          firstCard = null;
          secondCard = null;
        }
      }
      if (firstCard == null) {
        firstCard = card;
      } else {
        if (secondCard == null) {
          secondCard = card;
        }
      }
      if (firstCard !== null && secondCard !== null) {
        if (firstCard.cardNumber == secondCard.cardNumber) {
          firstCard.success = true;
          secondCard.success = true;
          firstCard = null;
          secondCard = null;
        }
      }


      startGame.addEventListener('click', () => {
        if (document.querySelectorAll('.card.success').length == cardsNumberArray.length) {
          container.innerHTML = '';
          cardsNumberArray = [];
          cardsArray = [];
          firstCard = null;
          secondCard = null;
          newGame(container, cardsCount);
        }
      })
    }

  }
  newGame(document.getElementById('game'), 8)
})
