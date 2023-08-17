'use strict';
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  createPromisesBtn: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  const amount = Number(refs.amount.value);
  console.log(event.currentTarget);
  event.preventDefault();
  for (let i = 1; i <= amount; i++) {
    let totalDelay =
      Number(refs.delay.value) + Number(refs.step.value) * (i - 1);
    setTimeout(() => {
      createPromise(i, totalDelay)
        .then(({ position, delay }) =>
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}`
          )
        )
        .catch(({ position, delay }) =>
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}`)
        );
    }, totalDelay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    return new Promise(resolve({ position, delay }));
  } else {
    // Reject
    return new Promise(reject({ position, delay }));
  }
}
