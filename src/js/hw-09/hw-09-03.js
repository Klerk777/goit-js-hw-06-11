import { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('.delay'),
  step: document.querySelector('.step'),
  amount: document.querySelector('.amount'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSucces({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function onSubmitHandler(e) {
  e.preventDefault();

  let delay = Number(e.target.delay.value);
  for (let i = 1; i <= e.target.amount.value; i++) {
    createPromise(i, delay).then(onSucces).catch(onError);
    delay += Number(e.target.step.value);
  }
}

refs.form.addEventListener('submit', onSubmitHandler);
