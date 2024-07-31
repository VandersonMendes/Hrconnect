const router = require('express').Router();
const authController = require('../controllers/authController');
const verificEmailExist = require('../middleware/login/verificEmailExist');
const validadateCreateUser = require('../middleware/login/validateCreateUser');
const login = require('../middleware/login/login');
const token = require('../middleware/login/tokenJWT');
// const resetPassword = require('../middleware/login/resetPassword');
router.post('/register', validadateCreateUser, authController.registerUser);
router.post('/checkEmail', verificEmailExist, authController.existEmail);
router.post('/login', login, authController.login);
router.get('/token', token, authController.token);

// router.post('/forgot-password', resetPassword, verificEmailExist, userController.resetPassword);
// router.post('/reset-password/:token', resetPassword, verificEmailExist, userController.resetPassword);
 module.exports = router