// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://afrin:961215106001@cluster0.hbkqtqv.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up middleware for parsing JSON and handling file uploads
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define the storage engine for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Define your routes (CRUD operations)
app.use('/photos', require('./routes/photoRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
