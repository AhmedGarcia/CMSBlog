document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('.comment-form');

    if (commentForm) {
        commentForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            const content = document.querySelector('#comment-content').value.trim();
            const post_id = document.querySelector('#post-id').value; // Assuming there's a hidden input with the post_id

            if (content) {
                try {
                    const response = await fetch('/api/comments', {
                        method: 'POST',
                        body: JSON.stringify({ content, post_id }),
                        headers: { 'Content-Type': 'application/json' },
                    });

                    if (response.ok) {
                        window.location.reload(); // Reloads the page to show the updated comment list
                    } else {
                        alert('Failed to post comment');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                alert('Please write a comment before submitting');
            }
        });
    }
});


