const express = require('express');
const { Post, Comment } = require('../models');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.render('homepage');
// });

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{model: Comment}]
    });
    const mappedData = postData.map((post) =>
      post.get({
        plain: true
      })
    )
    console.log(mappedData);
    res.render('homepage', { posts: mappedData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    logged_in: req.session.logged_in,
  });

});

module.exports = router;
