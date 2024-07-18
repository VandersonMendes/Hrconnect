const router = require('express').Router();
const userController = require('../controllers/userController');
const verificEmailExist = require('../middleware/login/verificEmailExist');
const validadateCreateUser = require('../middleware/login/validateCreateUser');
const login = require('../middleware/login/login');
const token = require('../middleware/tokenJWT');
// const resetPassword = require('../middleware/login/resetPassword');
router.post('/register', validadateCreateUser, userController.registerUser);
router.post('/checkEmail', verificEmailExist, userController.existEmail);
router.post('/login', login, userController.login);
router.get('/token', token, userController.token);

// router.post('/forgot-password', resetPassword, verificEmailExist, userController.resetPassword);
// router.post('/reset-password/:token', resetPassword, verificEmailExist, userController.resetPassword);
 module.exports = router