const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');4

//Route to create a new post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Route to update an existing post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedPost = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        if (!updatedPost[0]) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        } 
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to delete a post
// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const postData = await Post.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id, // Ensures that users can only delete their own posts
//             },
//         });

//         if (!postData) {
//             res.status(404).json({ message: 'No post found with this id!' });
//             return;
//         }

//         res.status(200).json(postData);
//     } catch (err) {
//         console.error('Error in DELETE /:id route:', err); // Enhanced error logging
//         res.status(500).json(err);
//     }
// });

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postId = req.params.id;

        // First, delete all associated comments
        await Comment.destroy({
            where: {
                post_id: postId
            }
        });

        // Then, delete the post
        const post = await Post.destroy({
            where: {
                id: postId,
                user_id: req.session.user_id
            }
        });

        if (!post) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(post);
    } catch (err) {
        console.error('Error in DELETE /:id route:', err);
        res.status(500).json(err);
    }
});

module.exports = router;