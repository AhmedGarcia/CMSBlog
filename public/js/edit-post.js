// // Handles the edit post form submission
// document.querySelector('.edit-post-form').addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#post-title').ariaValueMax.trim(); 
//     const content = docuement.querySelector('#post-content').value.trim();
//     const id = "{{post.id}}"; // Get the current post ID

//     if (title && content) { // Ensure both title and content are provided
//         const response = await fetch(`/api/posts/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({ title, content }),
//         });

//         if (response.ok) { // Redirect to the dashboard if the post is updated successfully
//             document.location.replace('/dashboard');

//         } else {
//             alert('Failed to update post');
//         }


//     }
    
// });

// // Handles the delete