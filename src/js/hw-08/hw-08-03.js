// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// Розбий це завдання на декілька підзавдань:

// 1. Відстежуй на формі подію input , і щоразу записуй у локальне сховище об'єкт з полями email і message,
//      у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля
//      форми.В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
//      message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до
//      проекту і використовуй бібліотеку lodash.throttle.

import _ from 'lodash';
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

function onInputHandler() {
  const currentInputState = {};
  currentInputState.email = form.email.value;
  currentInputState.message = form.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentInputState));
}

function onSubmitHandler(e) {
  e.preventDefault();
  if (!e.target.email.value || !e.target.message.value) {
    alert('Please, complete both fields');
    return;
  }
  const submitData = Object.fromEntries(new FormData(e.target));
  console.log('Submit form!');
  console.table(submitData);

  e.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onPageLoad() {
  const parsedValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (parsedValue) {
    form.email.value = parsedValue.email;
    form.message.value = parsedValue.message;
  }
}

form.addEventListener('input', _.throttle(onInputHandler, 500));
form.addEventListener('submit', onSubmitHandler);

//run
onPageLoad();
