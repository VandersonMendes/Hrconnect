const Collaborator = require('../../models/collaborator');

module.exports = async function deleteColaborator(req, res, next) {
  try{
    const {idCollaborator, idCompany} = req.params;
    if(!idCollaborator || !idCompany) {
      return res.status(400).json({
        message: 'Preencha os dados corretamente',
        erro: true
      });
    }
  }catch(err) {
    return res.status(500).json(er);
  }
  next();
}