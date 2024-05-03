const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Fetch all posts associated with the logged-in user
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id, // Assuming you store user_id in the session
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      loggedIn: true, 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    loggedIn: true,
  });
});

router.post('/new', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id, 
    });

    res.status(200).redirect('/dashboard');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/post/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    await post.destroy();
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/post/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();

    res.status(200).json({ message: 'Post updated successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
