const router = require('express').Router();
const homeController = require('../controllers/homeController');
const getUser = require('../middleware/home/getUser');
router.get('/user/:id', getUser, homeController.getUser);

module.exports = router