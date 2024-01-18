const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const ImageRoutes = require('./routes/imageRoutes');
const userRoutes = require('./userRoutes');
=======
const imageRoutes = require('./routes/imageRoutes');
>>>>>>> 22e0c760e2e2544bb2e0eb9bc27ee3d0888edf7b
const path = require('path');
var cors = require('cors');
//const flash = require('express-flash');
const app = express();
<<<<<<< HEAD
//const passport = require('./config/passport');
=======
const passport = require('./config/passport');
>>>>>>> 22e0c760e2e2544bb2e0eb9bc27ee3d0888edf7b
const session = require('express-session');

app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://afrin:961215106001@cluster0.hbkqtqv.mongodb.net/ImageGallery', {
<<<<<<< HEAD
  
=======
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
>>>>>>> 22e0c760e2e2544bb2e0eb9bc27ee3d0888edf7b
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));
// Set up express-session and express-flash
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
<<<<<<< HEAD
})); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));


app.use(ImageRoutes);
app.use(userRoutes);

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
 
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
=======
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

// Set up routes
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   next();
// });
app.use(imageRoutes);
// Routes
const authRoutes = require('./routes/index');
app.use(authRoutes);
// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
require('./config/passport');

// Routes
//app.use('/', indexRoutes);
//app.use('/', adminRoutes);

// Set up the port for the server to run
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 22e0c760e2e2544bb2e0eb9bc27ee3d0888edf7b
