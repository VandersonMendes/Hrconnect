const verificEmailExist = require("../middleware/verificEmailExist");
const user = require("../models/user");
const bcrypt = require('bcrypt');
module.exports = async function validateCreateUser(req, res, next) {
  const { nome, email, password, cnpj, company } = req.body;
  if (!nome || !email || !password || !cnpj || !company) {
    return res.status(401).json({
      message: "Preencha corretamente os dados",
      erro: true,
    });
  }
  await verificEmailExist(req, res, (erro) => {
    if(erro){
      return res.status(401).json({
      message: "Email ja existe",
      erro: true,
    });
    }
  });
   const userData = user.findOne({ cnpj: cnpj })
    if (userData) {
      return res.status(401).json({
        message: "CNPJ ja existe",
        erro: true,
      });
    }
      const newUser = new user(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  bcrypt.hash(newUser.password, salt);
    newUser.password = hashedPassword;
    await newUser.save();
  next();
}