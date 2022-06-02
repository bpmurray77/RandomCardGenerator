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
  document.querySelector(".top-suit").innerHTML = RandomSuit();
};
