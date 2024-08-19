const dataColabordor = require('../../models/');
module.exports = async function getDataSituation(req, res, next) {
  try{
    const email = req.params.id
    if(!email) {
        return res.status(400).json({
          message: 'Algo deu errado no servidor, tente novamente',
          erro: true
        })
        }
        const user = await dataColabordor.findById(email)
        if(!user){
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