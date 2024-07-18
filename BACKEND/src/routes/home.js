const router = require('express').Router();
const getUser = require('../middleware/home/getUser');
const token = require('../middleware/tokenJWT');
const userConttroller = require('../controllers/userController');

router.get('/user', userConttroller.getUser);

module.exports = router