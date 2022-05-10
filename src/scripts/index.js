import helpers from "./functions";
import "../assets/styles/style.scss";

const { Keyboard } = helpers;

const myKb = new Keyboard();
myKb.keysInRows = [9, 14, 13, 15, 14];
myKb.init();
