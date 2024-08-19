const Company = require('../models/company');
const Collaborator = require('../models/collaborator');
exports.getCompany = async (req, res) =>{
 try{
   const id = req.params.id;
    const data = await Company.findById(id).select('-password');
   return res.status(200).json({data});
 }catch(err){
   return res.status(500).json(err);
 }
}
exports.getColaborador= async (req, res) =>{
  const {name, email, company, situation, position} = req.body;
  // return res.status(200).json({name, email, company, situation, position});
  try{
    // const email = req.params.id;
    // const data = await dataColaborador.findById(email);
    return res.status(200).json({data});
  }catch(err){
  }
}

exports.createCollaborator = async (req, res) =>{
  try{
    const {idCompany, nome, email, cpf, situation, position} = req.body;
    const company = await Collaborator.findOne({idCompany: idCompany});
    company.employees.push({nome, email, cpf, situation, position});
   await company.save();
   res.status(200).json({
    'message': 'Colaborador criado com sucesso '+nome,
   });
  }catch(err){
    return res.status(500).json(err);
  }
}
exports.getStatusEmployee = async (req, res) =>{
  try{
    const email = req.params.id;
    const data = await Collaborator.findOne({email: email});
    return res.status(200).json({data});
  }catch(err){
    return res.status(500).json(err);
  }
}