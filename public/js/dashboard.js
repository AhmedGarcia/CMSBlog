document.addEventListener('DOMContentLoaded', () => {

    // Handles creating a new post from the dashboard
    const newPostForm = document.querySelector('.new-post-form');
    if (newPostForm) {
        newPostForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const title = document.querySelector('#post-title').value.trim();
            const content = document.querySelector('#post-content').value.trim();

            if (title && content) { // Ensure that both title and content are provided
                const response = await fetch(`/api/posts`, {
                    method: 'POST',
                    body: JSON.stringify({ title, content }),
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
        });
    }

    // Handles the edit post form submission
    const editPostForm = document.querySelector('.edit-post-form');
    if (editPostForm) {
        editPostForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const title = document.querySelector('#post-title').value.trim();
            const content = document.querySelector('#post-content').value.trim();
            const id = editPostForm.getAttribute('data-id'); // Get the post ID from the form's data-id attribute

            if (title && content && id) { // Ensure both title, content, and ID are provided
                const response = await fetch(`/api/posts/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({ title, content }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.replace('/dashboard'); // Redirect to the dashboard if the post is updated successfully
                } else {
                    alert('Failed to update post.');
                }
            } else {
                alert('Missing title, content, or post ID.');
            }
        });
    }

    // Handles the delete post button click
    document.querySelectorAll('.delete-post-btn').forEach(button => {
        button.addEventListener('click', async (event) => {
            const id = event.target.getAttribute('data-id'); // Get the post ID from the button's data-id attribute

            if (id) { // Ensure the ID is not null or undefined
                const response = await fetch(`/api/posts/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    document.location.replace('/dashboard'); // Reload the dashboard after deletion
                } else {
                    alert('Failed to delete post.');
                }
            } else {
                alert('Post ID is missing.');
            }
        });
    });

    // Handles the edit post button click
    document.querySelectorAll('.edit-post-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            if (id) {
                document.location.replace(`/dashboard/edit/${id}`);
            } else {
                alert('Post ID is missing.');
            }
        });
    });

});
