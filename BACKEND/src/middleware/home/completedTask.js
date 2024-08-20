

module.exports = async function completedTask(req, res, next) {
  try{
    const {completed} = req.body;
    if(!completed) {
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