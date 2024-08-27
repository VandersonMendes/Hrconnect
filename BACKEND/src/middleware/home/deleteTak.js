const Collaborator = require('../../models/collaborator');

module.exports = async function deleteTask(req, res, next) {
  try{
    const {idT, idC} = req.params;
    if(!idC || !idT) {
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