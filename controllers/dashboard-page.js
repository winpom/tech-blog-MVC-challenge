const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => { 
  try {
    if (!req.session.user_id) {
      // Handle case where user is not logged in
      res.render('dashboard', { message: 'Please log in to view the dashboard' });
      return;
    }

    const userData = await User.findByPk(req.session.user_id);
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: Comment, include: [{ model: User }] }, { model: User }],
    });

    const user = userData.get({ plain: true });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      user,
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Renders the new post page
router.get('/new', async (req, res) => {
  try {
    const loggedInUsername = req.session.username; 

    res.render('new-post', { loggedIn: true, username: loggedInUsername });
  } catch (err) {
    console.error('Error rendering new post page:', err);
    res.status(500).json({ error: 'Failed to render new post page' });
  }
});

module.exports = router;
