// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model('photos', imageSchema);

module.exports = Image;
