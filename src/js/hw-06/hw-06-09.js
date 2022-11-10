// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку
// на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
  // add color inversion for text
  color.parentElement.style.color = newColor;
  color.parentElement.style.filter = 'invert(1)';
});
