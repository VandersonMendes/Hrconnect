const Collaborator = require('../../models/collaborator');

module.exports = async function createTaks(req, res, next) {
  try{
    const {taks, idCompany} = req.body;
    if(!taks || !idCompany) {
      return res.status(400).json({
        message: 'Preencha os dados corretamente',
        erro: true
      });
    }
     const listCollaborator = await Collaborator.findOne({idCompany: idCompany });
    if(listCollaborator.tasks.length > 4){
      return res.status(400).json({
        message: 'Limite de tarefas alcancado',
        erro: true
      });
    }
  }catch(err) {
    return res.status(500).json(er);
  }
  next();
}