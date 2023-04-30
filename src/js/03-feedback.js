//! Importing the Lodash throttle function
import throttle from 'lodash.throttle';

//! Get the form and its inputs and submit button
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

//* Define a function that saves the form state to local storage using Lodash throttle

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('form-state', JSON.stringify(formState));
}, 500);

//* Add an input event listener to the form that calls the saveFormState function
form.addEventListener('input', saveFormState);

//* On page load, check if there is saved form state in local storage

window.addEventListener('load', () => {
  const formState = JSON.parse(localStorage.getItem('form-state'));
  if (formState) {
    emailInput.value = formState.email || '';
    messageInput.value = formState.message || '';
  }
});

//* Adding a click event listener to the submit button that validates the form and saves its state to local storage if valid
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
    alert('Please, enter your email and message.');
  }
});
