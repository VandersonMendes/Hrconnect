const verificEmailExist = require("../middleware/verificEmailExist");
const user = require("../models/user");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
module.exports = async function resetPassword(req, res, next) {
  const {email } = req.body;
  // const 
  
  // next();
}