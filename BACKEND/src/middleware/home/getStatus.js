const Collaborator  = require('../../models/collaborator');

module.exports = async function status(req, res, next) {

  try{
      const id = req.params.id
    const collaborator = await Collaborator.findOne({idCompany: id})
    if(!collaborator) {
      return res.status(400).json({
        message: 'Company nao encontrada',
        erro: true
      })
    }

  }catch(err) {
    return res.status(500).json(err)
  }
  next();
}