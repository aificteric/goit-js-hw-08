// Importing the Lodash throttle function
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('form-state', JSON.stringify(formState));
}, 500);

form.addEventListener('input', saveFormState);

window.addEventListener('load', () => {
  const formState = JSON.parse(localStorage.getItem('form-state'));
  if (formState) {
    emailInput.value = formState.email || '';
    messageInput.value = formState.message || '';
  }
});

submitButton.addEventListener('click', event => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  if (emailValue && messageValue) {
    const formState = {
      email: emailValue,
      message: messageValue,
    };
    console.log(formState);
    localStorage.removeItem('form-state');
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Please enter your email and message.');
  }
});
