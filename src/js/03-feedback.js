let throttle = require('lodash.throttle');
const form = document.querySelector('form');
let object = { email: ' ', message: ' ' };

form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', onSubmit);
setDefault();

function saveInput() {
  object.email = form.elements.email.value;
  object.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

function setDefault() {
  JSON.parse(localStorage.getItem('feedback-form-state'));
}

function onSubmit(e) {
  e.preventDefault();
  form.elements.email.value = '';
  form.elements.message.value = '';
  localStorage.removeItem('feedback-form-state');
  console.log(object);
}