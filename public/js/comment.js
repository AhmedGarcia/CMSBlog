// const commentFormHandler = async (event) => {
//     event.preventDefault();

//     const content = document.querySelector('textarea[name="comment-body"]').value.trim();
//     const post_id = window.location.toString().split('/').pop();

//     if (content) {
//         const response = await fetch('/api/comments', {
//             method: 'POST',
//             body: JSON.stringify({ content, post_id }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.reload();
//         } else {
//             alert('Failed to add comment');
//         }
//     }
// };

// document
//     .querySelector('.comment-form')
//     .addEventListener('submit', commentFormHandler);

// document.querySelector('.comment-form').addEventListener('submit', async (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior

//     const content = document.querySelector('#comment-content').value.trim();
//     const post_id = document.querySelector('#post-id').value; // Assuming there's a hidden input with the post_id

//     if (content) {
//         try {
//             const response = await fetch('/api/comments', {
//                 method: 'POST',
//                 body: JSON.stringify({ content, post_id }),
//                 headers: { 'Content-Type': 'application/json' },
//             });

//             if (response.ok) {
//                 window.location.reload(); // Reloads the page to show the updated comment list
                // const comment = await response.json();
                // // Dynamically add the comment to the page
                // const commentSection = document.querySelector('#comments-section');
                // const newComment = document.createElement('div');
                // newComment.classList.add('comment');
                // newComment.innerHTML = `
                //     <p>${comment.content}</p>
                //     <p>By: ${comment.user.username} on ${new Date(comment.createdAt).toLocaleString()}</p>
                // `;
                // commentSection.appendChild(newComment);
                // document.querySelector('#comment-content').value = ''; // Clear the textarea
//             } else {
//                 alert('Failed to post comment');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     } else {
//         alert('Please write a comment before submitting');
//     }
// });

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


