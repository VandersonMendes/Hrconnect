const Company = require('../models/company');
const Collaborator = require('../models/collaborator');
const collaborator = require('../models/collaborator');
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
    const id = req.params.id;
    const collaborator = await Collaborator.findOne({idCompany: id });
     let statusCount = {
    ativo: 0,
    ferias: 0,
    desativado: 0,
  };

  for (let employee of collaborator.employees) {
    // Contar a quantidade de cada situação
    // AT = ativo
    // AF = Afastados
    // FE = ferias
    switch (employee.situation) {
      case 'AT':
        statusCount.ativo += 1;
        break;
      case 'FE':
        statusCount.ferias += 1;
        break;
      case 'AF':
        statusCount.desativado += 1;
        break;
      default:
        break;
    }
  }
  return res.status(200).json({statusCount});
  }catch(err){
    return res.status(500).json(err);
  }

}
  exports.createTask = async (req, res) =>{
    try{
      const {taks, idCompany} = req.body;
      // return res.status(200).json({taks});
       const listCollaborator = await Collaborator.findOne({idCompany: idCompany });
       const completed = false;
       listCollaborator.tasks.push({taks, completed});
      await listCollaborator.save();
      return res.status(200).json({
        message: 'Tarefa criada com sucesso',
        erro: false
      })
    }catch(err){
      return res.status(500).json(err);
    }
    
  }
    exports.completedTask = async (req, res) =>{
    try{
       const { completed, idTask, idCompany } = req.body;

    // Encontrar a empresa pelo idCompany
    const company = await Collaborator.findOne({ idCompany: idCompany });

    // Verificar se a empresa foi encontrada
    if (!company) {
      return res.status(404).json({
        message: 'Empresa não encontrada',
        erro: true
      });
    }

    // Encontrar a tarefa dentro da lista de tasks
    const task = company.tasks.find((task) => task._id == idTask);

    // Verificar se a tarefa foi encontrada
    if (task) {
      task.completed = completed; // Atualizar o campo 'completed'
    } else {
      return res.status(404).json({
        message: 'Tarefa não encontrada',
        erro: true
      });
    }

    // Salvar a empresa com a tarefa atualizada
    await company.save();

    return res.status(200).json({
      message: 'Tarefa atualizada com sucesso',
      erro: false,
      task: task
    });
    }catch(err){
      return res.status(500).json('esta aqui');
    }
    }