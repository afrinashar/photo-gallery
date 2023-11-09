// routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageControllers');


router.get('/images', imageController.getAllImages);
router.post('/images', imageController.createImage);
router.put('/images/:id', imageController.updateImage);
router.delete('/images/:id', imageController.deleteImage);
router.get('/images/:id', imageController.getImagesById);
module.exports = router;
