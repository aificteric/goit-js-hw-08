import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const saveToLocalStorage = () => {
  const feedbackFormState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(feedbackFormState));
};

const updateFormFields = () => {
  const feedbackFormState = JSON.parse(localStorage.getItem(storageKey));
  if (feedbackFormState) {
    emailInput.value = feedbackFormState.email || '';
    messageInput.value = feedbackFormState.message || '';
  }
};

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

const throttledSaveToLocalStorage = throttle(saveToLocalStorage, 500);

form.addEventListener('input', () => {
  throttledSaveToLocalStorage();
});

window.addEventListener('load', () => {
  updateFormFields();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  clearFormAndLocalStorage();
});
