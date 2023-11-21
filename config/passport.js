// config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Initialize Passport
passport.use('regular', new LocalStrategy((username, password, done) => {
  // ... (same logic as before)
}));

passport.use('admin', new LocalStrategy((username, password, done) => {
  // ... (same logic as before)
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
