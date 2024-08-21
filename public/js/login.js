// Handles the log in form submission
const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) { // Ensure both username and password are provided
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username,password }),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/dashboard'); // Redirect to the dashboard if login is successful
    } else {
        alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler)
