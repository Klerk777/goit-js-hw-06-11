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
};

let selectedDate = null;
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
  Notify.success(`Timer was started!`);
  refs.startBtn.disabled = true;
  refs.resetBtn.disabled = false;
  intervalID = setInterval(() => {
    render(getTimeLeft());
    if (selectedDate - new Date() < 1000) {
      clearInterval(intervalID);
      refs.resetBtn.disabled = true;
      Report.success('The appointed time has come');
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

refs.startBtn.addEventListener('click', onStartBtn);
refs.resetBtn.addEventListener('click', onResetBtn);
