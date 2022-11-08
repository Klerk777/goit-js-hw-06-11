// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.
const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};
refs.input.addEventListener('input', () => refs.text.setAttribute('style', `font-size: ${refs.input.value}px`));
