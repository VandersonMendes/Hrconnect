

module.exports = async function completedTask(req, res, next) {
  try{
    const {completed, idCompany, idTask} = req.body;


    if(!idCompany || !idTask) {
      console.log(completed, idCompany, idTask)
      return res.status(400).json({
        message: 'Preencha os dados corretamente',
        erro: true
      });

    }
  }catch(err) {
   return res.status(500).json(err);
  }
  next();
}