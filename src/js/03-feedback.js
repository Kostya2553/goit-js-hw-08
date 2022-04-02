import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const formData = {};


formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);


