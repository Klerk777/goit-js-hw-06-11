import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');
import { convertMs } from '../common-fn/convertMs.js';
import { Notify, Report } from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  resetBtn: document.querySelector('[data-reset]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  audio: document.querySelector('.audio'),
  volume: document.querySelector('.volume-control'),
  volumeIndicator: document.querySelector('.volume-value'),
  volumIcon: document.querySelector('.volume-icon'),
};

const LOCALSTORAGE_VOLUME_KEY = 'volume-level';
let selectedDate = null;
let intervalID = null;

const nullTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

flatpickr('#datetime-picker', {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  minDate: 'today',
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(),

  onClose: selectedDates => {
    const curentDate = new Date();
    if (selectedDates[0] < curentDate) {
      Notify.failure('Please choose a date in the future');
    } else {
      selectedDate = selectedDates[0];
      Notify.success(`Date is correct! Selected date:  ${selectedDate.toLocaleString()}`);
    }
  },

  onChange: selectedDates => {
    if (selectedDates[0] < new Date()) {
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
    }
  },
});

function getTimeLeft() {
  return convertMs(selectedDate - new Date());
}

function onStartBtn() {
  render(getTimeLeft());
  Notify.success(`Timer was started!`);
  refs.startBtn.disabled = true;
  refs.resetBtn.disabled = false;
  intervalID = setInterval(() => {
    render(getTimeLeft());
    if (selectedDate - new Date() < 1000) {
      render(nullTime);
      clearInterval(intervalID);
      refs.resetBtn.disabled = true;
      Report.warning('The time is up!', 'Lights out soon!');

      const promise = refs.audio.play();
      promise
        .then(() => {
          console.log('audio plaing');
          console.log('volume level: ', refs.audio.volume);
        })
        .catch(error => {
          console.log(`Catch error:  ${error}`);
        });

      return;
    }
  }, 1000);
}

function onResetBtn() {
  render(nullTime);
  clearInterval(intervalID);
  refs.resetBtn.disabled = true;
  Notify.warning(`Timer was stopped!`);
}

function render(date) {
  const { days, hours, minutes, seconds } = date;
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function onVolumeChange(e) {
  localStorage.setItem(LOCALSTORAGE_VOLUME_KEY, e.target.value / 10);
  setVolumeLevel();
}

function setVolumeLevel() {
  const selectedVolumeLevel = localStorage.getItem(LOCALSTORAGE_VOLUME_KEY);
  refs.audio.volume = selectedVolumeLevel ? selectedVolumeLevel : 0.5;
  refs.volume.value = refs.audio.volume * 10;
  refs.volumeIndicator.textContent = refs.volume.value;
  if (refs.volume.value == 0) {
    refs.volumIcon.classList.add('mute');
  } else {
    refs.volumIcon.classList.remove('mute');
  }
}

function onVolumeIconClick() {
  refs.volumIcon.classList.toggle('mute');
  refs.audio.volume = refs.volumIcon.classList.contains('mute') ? 0 : localStorage.getItem(LOCALSTORAGE_VOLUME_KEY);
  refs.volume.value = refs.audio.volume * 10;
  refs.volumeIndicator.textContent = refs.volume.value;

  console.log(refs.audio.volume);
}

function run() {
  render(nullTime);
  setVolumeLevel();
}

refs.startBtn.addEventListener('click', onStartBtn);
refs.resetBtn.addEventListener('click', onResetBtn);
refs.volume.addEventListener('input', onVolumeChange);
refs.volumIcon.addEventListener('click', onVolumeIconClick);

run();
