
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require("passport");
const path = require("path");

// Setting up port
const connUri = process.env.MONGO_LOCAL_CONN_URL;
let PORT = process.env.PORT || 3000;

//=== 1 - CREATE APP
// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//=== 2 - SET UP DATABASE
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.connect(connUri, { useNewUrlParser: true , useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB --  database connection established successfully!'));
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});

//=== 3 - INITIALIZE PASSPORT MIDDLEWARE
app.use(passport.initialize());
require("./jwt")(passport);


//=== 4 - CONFIGURE ROUTES
//Configure Route
require('./routes/index')(app);


//=== 5 - START SERVER
app.listen(PORT, () => console.log('Server running on http://localhost:'+PORT+'/'));


































// const express = require('express');
// const mongoose = require('mongoose');
// const imageRoutes = require('./routes/imageRoutes');
// const path = require('path');
// var cors = require('cors');
// //const flash = require('express-flash');

  
// const User = require("./models.js"); 
// //const localStrategy = require("./passp.js"); 
// const controllers = require("./controllers.js"); 
// const cookieParser = require("cookie-parser"); 
 
// const ejs = require("ejs"); 
// const bodyParser = require("body-parser"); 
// const routes = require("./pages.js"); 
 
// const app = express();
// const passport = require('./config/passport');
// const session = require('express-session');

// app.use(cors());
// // Connect to MongoDB
// mongoose.connect('mongodb+srv://afrin:961215106001@cluster0.hbkqtqv.mongodb.net/ImageGallery', {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
//   // useFindAndModify: false,
//   // useCreateIndex: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB', err));


//   pp.use( 
//     session({ 
//         secret: "GFGLogin346", 
//         resave: false, 
//         saveUninitialized: false, 
//     }) 
// ); 
// app.use(cookieParser()); 
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(passport.initialize()); 
// app.use(passport.session()); 
// app.set("view engine", "ejs");
// // Set up express-session and express-flash
// app.use(session({
//   secret: 'your-secret-key',
//   resave: true,
//   saveUninitialized: true
// }));
// // Passport middleware
// apassport.serializeUser((user, done) => done(null, user.id)); 
// passport.deserializeUser((id, done) => { 
//     User.findById(id, (err, user) => done(err, user)); 
// }); 
// // Set up the middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// //app.use(flash());
// // Set up the static directory for uploads
// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// // Set up routes
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   next();
// });
// app.use(imageRoutes);
// // Routes
// const authRoutes = require('./routes/index');
// app.use(authRoutes);
// // Express middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: 'afr', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Passport configuration
// require('./config/passport');

// // Routes
// // Use the routes 
// app.use("/api/", controllers); // Path to your authentication routes file 
// app.use("/", routes);
// //app.use('/', indexRoutes);
// //app.use('/', adminRoutes);

// // Set up the port for the server to run
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
