// models/photo.js
const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: String,
  description: String,
  imagePath: String,
});

module.exports = mongoose.model('Photo', photoSchema);
