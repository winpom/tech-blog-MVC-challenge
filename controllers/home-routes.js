const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login',{
    logged_in: req.session.logged_in,
  });
  
});

module.exports = router;
