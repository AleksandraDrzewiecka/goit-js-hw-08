import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const formMessage = document.querySelector('textarea[name=message]');
const formEmail = document.querySelector('input[name=email]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

window.addEventListener('load', () => {
  const prevVal = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localStorage.getItem('feedback-form-state') !== null) {
    formEmail.value = prevVal.email;
    formMessage.value = prevVal.message;
  }
});

form.addEventListener(
  'input', //nasłuch na to co wpisuje//
  throttle(() => {
    let someData = {
      email: formEmail.value,
      message: formMessage.value,
    }; 
    localStorage.setItem('feedback-form-state', JSON.stringify(someData)); 
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state')); //widać na konsoli//
  form.reset();
  localStorage.clear(); 
});