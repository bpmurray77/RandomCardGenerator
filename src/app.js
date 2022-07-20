/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let RandomSuit = () => {
    let suit = [
      "<img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/743px-Card_diamond.svg.png' width='77'>",
      "<img src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Spades.svg' width='77'>",
      "<img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png' width='77'>",
      "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/800px-SuitClubs.svg.png' width='77'>"
    ];
    let suitIndex = Math.floor(Math.random() * 4);
    console.log(suit[suitIndex]);
    return suit[suitIndex];
  };
  let RandomCard = () => {
    let card = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q"
    ];
    let cardIndex = Math.floor(Math.random() * 13);
    console.log(card[cardIndex]);
    return card[cardIndex];
  };

  let suit = RandomSuit();
  document.querySelector(".top-suit").innerHTML = suit;
  document.querySelector(".bottom-suit").innerHTML = suit;
  document.querySelector(".face").innerHTML = RandomCard();
};
