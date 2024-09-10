
const Company = require('../../models/company');
module.exports = async function updateCompany(req, res, next) {
  try{
    const { nome, email, cnpj, company} = req.body;

    const {idCompany} = req.params;
    // return consle.log(idCompany)
    const companyID = await Company.findOne({_id: idCompany});
    if(!nome || !email || !cnpj || !company) {
        return res.status(400).json({
        message: 'Preencha todos os dados',
        erro: true
      });
    }
    if(!companyID) {
      return res.status(400).json({
        message: 'Company nao encontrada',
        erro: true
      });
    }

    // if (companyID.cpnj === cnpj) {
    //   return res.status(400).json({
    //     message: 'CNPJ já existe',
    //     erro: true,
    //   });
    // } 
  }catch(err) {
    return res.status(500).json({
      message: 'Erro interno',
      erro: true
    });
  }
  next();
}