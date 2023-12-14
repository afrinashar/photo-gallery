<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const User = require('../controllers/user');

router.route('/').get(User.index);
router.put('/update', User.update);
router.post('/upload', User.upload);

=======
const express = require('express');
const router = express.Router();
const User = require('../controllers/user');

router.route('/').get(User.index);
router.put('/update', User.update);
router.post('/upload', User.upload);

>>>>>>> 2d84c6b88ecd694834ccbf5dfec7c71ef0008309
module.exports = router;