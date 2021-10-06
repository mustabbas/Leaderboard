import './styles.css';
import { addScore, getData, createTable } from './score.js';

const formElement= document.querySelector('form');

const refresh = document.querySelector('.refresh');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(e.target.name.value, e.target.score.value);
});

refresh.addEventListener('click', () => {
  getData();
  createTable();
});

window.addEventListener('load', () => {
  createTable();
});