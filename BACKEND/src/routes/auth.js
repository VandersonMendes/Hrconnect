const router = require('express').Router();
const userController = require('../controllers/userController');
const verificEmailExist = require('../middleware/verificEmailExist');
const validadateCreateUser = require('../middleware/validateCreateUser');
const resetPassword = require('../middleware/resetPassword');
router.post('/register', validadateCreateUser, userController.registerUser);
router.post('/checkEmail', verificEmailExist, userController.existEmail);
router.post('/resetPassword', resetPassword, verificEmailExist, userController.resetPassword);
 module.exports = router