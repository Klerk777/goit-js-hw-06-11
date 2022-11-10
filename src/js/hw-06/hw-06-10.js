// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість
// елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням
// на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює
// стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову
// функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
import { isEmpty } from 'lodash';
const refs = {
  input: document.querySelector('#controls').firstElementChild,
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  divBox: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function randomColor() {
//   var color = '#' + Math.random().toString(16).slice(3, 9);
//   return color;
// }

const createBoxes = amount => {
  amount = refs.input.value;
  let boxSide = isEmpty(refs.divBox.children) ? 30 : parseInt(refs.divBox.lastElementChild.style.width) + 10;
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = boxSide + 'px';
    newDiv.style.height = boxSide + 'px';
    refs.divBox.append(newDiv);
    boxSide += 10;
  }
};

const destroyBoxes = () => {
  refs.divBox.innerHTML = '';
};

refs.createBtn.addEventListener('click', () => createBoxes());
refs.destroyBtn.addEventListener('click', () => destroyBoxes());

const clickMe = document.querySelector('#clickme');
function multiple(a, b) {
  console.log(a * b);
}
clickMe.addEventListener('click', () => multiple(3, 7));
