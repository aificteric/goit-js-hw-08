//! Importing the Lodash throttle function
import throttle from 'lodash.throttle';

//! Selecting form and input fields
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

//! Seting key for local storage due to the task requirements
const storageKey = 'feedback-form-state';

//* Saving form input values to local storage
const saveToLocalStorage = () => {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(feedbackFormState));
};

//* Updating form fields with values from local storage
const updateFormFields = () => {
  const feedbackFormState = JSON.parse(localStorage.getItem(storageKey));
  if (feedbackFormState) {
    emailInput.value = feedbackFormState.email || '';
    messageInput.value = feedbackFormState.message || '';
  }
};

//! Clearing form and local storage
const clearFormAndLocalStorage = () => {
  const feedbackFormState = {
    email: '',
    message: '',
  };
  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageInput.value = '';
  console.log(feedbackFormState);
};

//* Save form input values to local storage using lodash throttle
const throttledSaveToLocalStorage = throttle(saveToLocalStorage, 500);

// Add event listener to form inputs
form.addEventListener('input', () => {
  throttledSaveToLocalStorage();
});

// Update form fields with values from local storage on page load
window.addEventListener('load', () => {
  updateFormFields();
});

// Prevent default form submit behavior and clear form and local storage
form.addEventListener('submit', event => {
  event.preventDefault();
  clearFormAndLocalStorage();
});
