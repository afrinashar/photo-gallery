const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
//const passport = require('./config/passport');
 const authRouter =require("./routes/auth.route")
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// Connect to MongoDB
 
// Configure middleware
/* Middleware */
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
// Use the student router
app.use(userRoutes); 
app.use('/auth', authRouter);
 

const PORT = process.env.PORT || 3000;
const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

// Start the server

mongoose
.connect(
  `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.hbkqtqv.mongodb.net/ImageGallery`,
   
 
)
.then(() => {
  /* Express Server */
  app.listen(PORT, () => {
 console.log(`Server is setup on http://localhost:${PORT}`);
  });
})
.catch((err) => 
 console.log(`Something is wrong with server: ${err}`
));
 
