const router = require('express').Router();
const { Post, Comment, User } = require('../models');


// Route for the homepage that displays all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true}));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to display a single post by ID
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: [ 'username' ],
                },
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        const post = postData.get({ plain: true });
        
        console.log(post); 
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Render the login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login', { js: 'login' });
});

// Route to render the signup page
router.get('/signup', (req,res) => {
    if (req.session.logged_in) {
        req.redirect('/dashboard');
        return;
    }

    res.render('signup', { js: 'signup'});
})

module.exports = router;