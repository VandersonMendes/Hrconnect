const router = require('express').Router();
const homeController = require('../controllers/homeController')

router.get('/user', homeController.getUser);

module.exports = router