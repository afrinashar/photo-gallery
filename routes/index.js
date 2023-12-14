<<<<<<< HEAD

const auth = require('./auth');
const user = require('./user');
const authenticate = require('../middlewares/authenticate');

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: "Welcome to the AUTHENTICATION API. Register or Login to test Authentication."});
    });
    app.use('/api/auth', auth);
    app.use('/api/user', authenticate, user);
=======

const auth = require('./auth');
const user = require('./user');
const authenticate = require('../middlewares/authenticate');

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: "Welcome to the AUTHENTICATION API. Register or Login to test Authentication."});
    });
    app.use('/api/auth', auth);
    app.use('/api/user', authenticate, user);
>>>>>>> 2d84c6b88ecd694834ccbf5dfec7c71ef0008309
};