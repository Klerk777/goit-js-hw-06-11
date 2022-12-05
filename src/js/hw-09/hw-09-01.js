import getRandomHexColor from '../common-fn/getRandomHexColor';

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onStartBtn() {
  changeColor();
  intervalID = setInterval(changeColor, 1000);
  startBtn.disabled = true;
}

function onStopBtn() {
  clearInterval(intervalID);
  startBtn.disabled = false;
}

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);
