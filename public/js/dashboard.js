// Handles creating a new post from the dashboard
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) { // Ensure that both title and content are provided
        const response = await fetch(`/api/posts`, {
            method: 'POST',

            body:JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard'); // Redirect to the dashboard if the post is created successfully
        } else {
            alert('Failed to create post.');
        }
    }
};

// Handles post deletion
const delButtonHandler = async (event) => {
    if (event.target.matches('.delete-post-btn')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard'); // Reload the dashboard after deletion
        } else {
            alert('Failed to delete post');
        }
    }
};

// Add event listeners
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('.dashboard').addEventListener('click', delButtonHandler);