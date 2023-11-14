// routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const upload = require('../middleware/upload');

router.get('/images', imageController.getAllImages);
router.get('/images/id', imageController.getImagesById);
router.post('/images', upload, imageController.createImage);
router.put('/images/:id', imageController.updateImage);
router.delete('/images/:id', imageController.deleteImage);

module.exports = router;
