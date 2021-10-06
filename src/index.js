import './styles.css';
import { addScore, getData, createTable } from './score.js';

const add = document.querySelector('.add');
const user = document.querySelector('.name');
const score = document.querySelector('.scoreValue');
const refresh = document.querySelector('.refresh');

add.addEventListener('click', () => {
  addScore(user.value, score.value);
});

refresh.addEventListener('click', () => {
  getData();
  createTable();
});

window.addEventListener('load', () => {
  createTable();
});