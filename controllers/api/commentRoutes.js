const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Debugging line

        if (!req.body.content || !req.body.post_id) {
            return res.status(400).json({ error: "Content and post_id are required" });
        }

        const newComment = await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id, 
            user_id: req.session.user_id,
        });

        res.redirect(`/post/${req.body.post_id}`);
    } catch (err) {
        console.error(err); // Log the full error for debugging
        res.status(500).json(err);
    }
});


  // Route to handle creating a new comment
//   router.post('/comments', withAuth, async (req, res) => {
//     console.log('POST request to /api/comments');
//     console.log('Request body:', req.body);
  
//     try {
//       const newComment = await Comment.create({
//         content: req.body.content,
//         post_id: req.body.post_id,
//         user_id: req.session.user_id,
//       });
  
//       console.log('New comment created:', newComment);
//       res.status(200).json(newComment);
//     } catch (err) {
//       console.error('Error creating comment:', err);
//       res.status(500).json(err);
//     }
//   });
  
 
  
  module.exports = router;

