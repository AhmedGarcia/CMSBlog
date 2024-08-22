const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Route for the dashboard that displays the users's posts
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in,
            js: 'dashboard'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to render a new post page
router.get('/new', withAuth, (req, res) => {
    res.render('new-post', { 
        logged_in: req.session.logged_in,
        js: 'dashboard'
     });
});

// Route to render the edit post page
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        const post = postData.get({ plain: true });

        res.render('edit-post', {
            post,
            logged_in: req.session.logged_in,
            js: 'dashboard'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;