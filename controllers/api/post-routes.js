const router = require('express').Router();
const { Post } = require('../../models');
const { User } = require('../../models'); 
const withAuth = require('../../utils/auth');

// Get a post by ID
router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findByPk(postId, {
      include: [{ model: User, attributes: ['username'] }], 
    });

    if (!postData) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    res.render('post', { post: postData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to retrieve post data' });
  }
});

// Create a new post
router.post('/new', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Renders the new post page
router.get('/new', withAuth, async (req, res) => {
  try {
    const loggedInUsername = req.session.username; 

    res.render('new-post', { loggedIn: true, username: loggedInUsername });
  } catch (err) {
    console.error('Error rendering new post page:', err);
    res.status(500).json({ error: 'Failed to render new post page' });
  }
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);

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

// Update a post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);

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