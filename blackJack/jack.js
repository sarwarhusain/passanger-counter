let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let msgEl = document.getElementById("message-el");
// let sumEl = document.querySelector("body");
let sumEl = document.getElementById("sum-el");

let cardEl = document.getElementById("card-el");
// console.log(cardEl);

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you need a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got blacjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  msgEl.textContent = message;
}

function newCard() {
  let card = 7;
  sum += card;
  renderGame();
}
