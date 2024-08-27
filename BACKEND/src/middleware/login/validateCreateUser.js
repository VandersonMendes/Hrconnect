const verificEmailExist = require("../login/verificEmailExist");
const Company = require("../../models/company");
module.exports = async function validateCreateUser(req, res, next) {
  const { nome, email, password, cnpj, company} = req.body;
  if (!nome || !email || !password || !cnpj || !company) {
    return res.status(401).json({
      message: "Preencha corretamente os dados",
      erro: true,
    });
  }
  verificEmailExist(req, res, (erro) => {
    if(erro){
      return res.status(401).json({
      message: "Email ja existe",
      erro: true,
    });
    }
  });
  const validadeteEmail = await Company.findOne({ email: email });
  validadeteEmail.email.forEach((email) => {
    if (email === email) {
      return res.status(401).json({
        message: "Email ja existe",
        erro: true,
      });
    }
  })

  next();
}