const express = require('express');
const mongoose = require('mongoose');
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');
var cors = require('cors');
//const flash = require('express-flash')
const app = express();
const passport = require('./config/passport');
const session = require('express-session');

app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://afrin:961215106001@cluster0.hbkqtqv.mongodb.net/ImageGallery', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));
// Set up express-session and express-flash
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Set up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(flash());
// Set up the static directory for uploads
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));