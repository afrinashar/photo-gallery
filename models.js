// Require necessary modules
const mongoose = require('mongoose');

// Create a schema for your images
const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
