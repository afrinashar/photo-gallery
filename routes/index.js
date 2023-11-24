// routes/index.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/login', (req, res) => {
  res.send('Login Page');
});

router.post('/login',
  passport.authenticate('regular', { successRedirect: '/dashboard', failureRedirect: '/login' })
);

router.get('/dashboard', (req, res) => {
  if (req.isAuthenticated() && req.user.userType === 'regular') {
    res.send('Regular User Dashboard');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
