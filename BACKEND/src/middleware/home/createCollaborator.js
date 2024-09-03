
const Company = require('../../models/company');
const Collaborator = require('../../models/collaborator');
module.exports = async function createCollaborator(req, res, next) {
  try{
    const {idCompany, nome, email, cpf, situation, position } = req.body;
    // console.log(req.body)
    console.log(idCompany, nome, email, cpf, situation, position)
    const company = await Company.findOne({_id: idCompany});
    const collaborator = await Collaborator.findOne({idCompany: idCompany});
    // console.log(company, collaborator)
    if(!nome || !email || !cpf || !situation || !position) {
        return res.status(400).json({
        message: 'Preencha todos os dados',
        erro: true
      });
    }
    if(!company) {
      return res.status(400).json({
        message: 'Company nao encontrada',
        erro: true
      });
    }
  for (let employee of collaborator.employees) {
      // AT = ativo
    // AF = Afastados
    // FE = ferias
    switch (situation) {
  case 'Ativo':
    situation = 'AT';
    break;
  case 'Afastado':
    situation = 'AF';
    break;
  case 'Ferias':
    situation = 'FE';
    break;
  default:
    break;
  }
    if(situation !== 'AT' && situation !== 'AF' && situation !== 'FE') {
      return res.status(400).json({
        message: 'Situacao do colaborador invalida',
        erro: true
      })
    }
    if (employee.email === email) {
      return res.status(400).json({
        message: 'Email já existe',
        erro: true,
      });
    } else if (employee.cpf === cpf) {
      return res.status(400).json({
        message: 'CPF já existe',
        erro: true
    })
    }
  }
  }catch(err) {
    return res.status(500).json({
      message: 'Erro AQIO',
      erro: true
    });
  }
  next();
}