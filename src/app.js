/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let RandomSuit = () => {
    let suit = ["diamond", "spade", "heart", "club"];
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
  document.querySelector(".top-suit").innerHTML = RandomSuit();
  document.querySelector(".card").innerHTML = RandomCard();
};
