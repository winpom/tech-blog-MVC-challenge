const express = require('express');
const { Post, Comment } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Check if the user is logged in
    const loggedIn = req.session.loggedIn;

    // Fetch posts data from the database
    const postData = await Post.findAll({
      include: [{ model: Comment }]
    });

    // Map the data to plain objects
    const mappedData = postData.map((post) =>
      post.get({
        plain: true
      })
    );

    // Render the homepage template, passing loggedIn and posts data
    res.render('homepage', { loggedIn, posts: mappedData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  // If not logged in, render the login page with loggedIn set to false
  res.render('login', {
    loggedIn: false
  });
});

module.exports = router;
