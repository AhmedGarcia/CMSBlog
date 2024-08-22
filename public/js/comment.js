// // Handles adding a new comment to a post
// const commentFormHandler = async (event) => {
//     event.preventDefault();

//     const content = documet.querySlector('#comment-content').vaule.trim();
//     const post_id = window.location.toString().split('/').pop(); // converts the current URL of the browser window into a string. The split method splits this URL string into an array of substrings, using / as the delimiter and pop removes and returns the last element of the array(an ID).

//     if (content) { // Ensure that the comment content is provided
//         const response = await fetch(`/api/comments`, {
//             method: 'POST',
//             body: JSON.stringify({ content, post_id}),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.reload(); // Reloads the page to display the new comment
//         } else {
//             alert('Failed to add comment.');
//         }
//     }
// };

// document
//   .querySlector('.comment-form')
//   .addEventListener('submit', commentFormHandler);


document.querySelector('.comment-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post-id').value;
  
    if (content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload(); // Reload the page to show the new comment
      } else {
        alert('Failed to add comment');
      }
    }
  });