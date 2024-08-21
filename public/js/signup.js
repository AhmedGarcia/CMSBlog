// Handles the signup form submission
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) { // Ensure both username and password are provided
        const response = await fetch(`/api/users/signup`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard'); // Redirect to the dashboard if signup is successful
        } else {
            alert('Failed to sign up');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);