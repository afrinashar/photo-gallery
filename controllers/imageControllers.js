// controllers/imageController.js
const Image = require('../models/Image');
const {upload} = require('../middleware/upload');
const imageController = {
  getAllImages:  async (req, res) => {
    try {
      const images = await Image.find();
      res.json(images);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  createImage:    async (req, res) => {
    const { name, description, imageUrl } = req.body;
console.log(req.body,"req")

    try {
     
      const newImage = new Image({ name, description, imageUrl });
      await 
      
      newImage.save();
      // upload.single('image')
      res.json(newImage); 
  } catch (err) {
     
      res.status(500).send( 'Server Error');
    }
  },

  updateImage: async (req, res) => {
    const { name, description,imageUrl } = req.body;

    try {
      const updatedImage = await Image.findByIdAndUpdate(req.params.id, { name, description,imageUrl }, { new: true });
      res.json(updatedImage);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

  deleteImage: async (req, res) => {
    try {
      await Image.findByIdAndRemove(req.params.id);
      res.json({ msg: 'Image removed' });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  },

getImagesById:  async (req, res) => {
  try {
    const images = await Image.findById(req.params.id);
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
},
};
module.exports = imageController;
