export default function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function randomColor() {
//   var color = '#' + Math.random().toString(16).slice(3, 9);
//   return color;
// }
