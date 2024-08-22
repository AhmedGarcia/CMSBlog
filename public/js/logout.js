// Handles the logging out of the user
const logout = async () => {
    const response = await fetch(`/api/users/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/'); // Redirect to the homepage after logging out
    } else {
        alert('Failed to log out.');
    }
};

document.querySelector('#logout').addEventListener('click', logout);