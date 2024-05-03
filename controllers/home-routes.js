const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// // Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login',{
    logged_in: req.session.logged_in,
  });
  
});

// // ? GET all posts for homepage
// router.get('/', async (req, res) => {
//   try {
//     const postData = await Post.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['id'],
//         },
//       ],
//     });

//     const posts = postData.map((post) =>
//       post.get({ plain: true })
//     );

//     res.render('homepage', {
//       posts,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // ? GET one post
// router.get('/post/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: [
//             'id'
//           ],
//         },
//       ],
//     });

//     const post = postData.get({ plain: true });
//     res.render('post', { post });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
