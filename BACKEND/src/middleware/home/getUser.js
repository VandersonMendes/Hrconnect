const User = require('../../models/user');
module.exports = async function getUser(req, res, next) {
  try{
    const id = req.params.id
    if(!id) {
        return res.status(400).json({
          message: 'Id obrigatorio',
          erro: true
        })
        }
        const user = await User.findById(id)
        if(!user) {
            return res.status(400).json({
              message: 'Id invalido',
              erro: true
            })
            }
  }catch(err) {
    return res.status(500).json({
      message: 'Erro interno',
      erro: true
    })
  }
        next();
}