/********w************
    
    Project 4
    Name: Donald Leschyshyn
    Date: April 26 2023
    Description: Project 4 website build and deployment

*********************/

// get form elements
const form = document.querySelector('form');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');
const emailField = document.getElementById('email');
const commentsField = document.getElementById('comments');

// create regular expressions for validation
const nameRegex = /^[A-Za-z]+$/;
const phoneRegex = /^\d{10}$/;
const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

// validate name field
function validateName() {
  const value = nameField.value.trim();
  if (!value || !nameRegex.test(value)) {
    nameField.classList.add('error');
    nameField.focus();
    nameField.select();
    return false;
  } else {
    nameField.classList.remove('error');
    return true;
  }
}

// validate phone field
function validatePhone() {
  const value = phoneField.value.trim();
  if (!value || !phoneRegex.test(value)) {
    phoneField.classList.add('error');
    phoneField.focus();
    phoneField.select();
    return false;
  } else {
    phoneField.classList.remove('error');
    return true;
  }
}

// validate email field
function validateEmail() {
  const value = emailField.value.trim();
  if (!value || !emailRegex.test(value)) {
    emailField.classList.add('error');
    emailField.focus();
    emailField.select();
    return false;
  } else {
    emailField.classList.remove('error');
    return true;
  }
}

// validate form on submit
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let valid = true;
  if (!validateName()) {
    valid = false;
  }
  if (!validatePhone()) {
    valid = false;
  }
  if (!validateEmail()) {
    valid = false;
  }
  if (valid) {
    // submit form
    alert('Form submitted successfully!');
    form.reset();
  }
});

// validate form on reset
form.addEventListener('reset', function() {
  nameField.classList.remove('error');
  phoneField.classList.remove('error');
  emailField.classList.remove('error');
});