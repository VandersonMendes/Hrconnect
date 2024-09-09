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

 exports.getTask = async (req, res) =>{
    try{
       const idCompany = req.params.id
    const company = await Collaborator.findOne({ idCompany: idCompany });
    if (!company) {
      return res.status(404).json({
        message: 'Empresa não encontrada',
        erro: true
      });
    }


    return res.status(200).json(
      company.tasks
    );
    }catch(err){
      return res.status(500).json('esta aqui');
    }
    }

exports.deleteTask =async (req, res) =>{
 try{
 // idT = id da tarefa
  // idC = id da empresa
  const {idT, idC} = req.params
  const company = await Collaborator.findOne({idCompany: idC});
const taskIndex = company.tasks.findIndex((task) => task._id == idT);

   
    if (taskIndex === -1) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    company.tasks.splice(taskIndex, 1);
    await company.save();
  
  return res.status(200).json({
    message: 'Tarefa excluída com sucesso',
    erro: false
  });
 }catch(err){
   return res.status(500).json(err);
 }
}

 exports.createTask = async (req, res) =>{
    try{
      const {taks, idCompany} = req.body;
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
    const company = await Collaborator.findOne({ idCompany: idCompany });
    if (!company) {
      return res.status(404).json({
        message: 'Empresa não encontrada',
        erro: true
      });
    }
    const task = company.tasks.find((task) => task._id == idTask);
    if (task) {
      task.completed = completed; 
    } else {
      return res.status(404).json({
        message: 'Tarefa não encontrada',
        erro: true
      });
    }
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

exports.getColaborador =async (req, resp) =>{
  try{
    const {id} = req.params;
  if(!id){
    return resp.status(400).json({message: 'ID da empresa é necessário'});
  }
  const company = await Collaborator.find({idCompany: id});
  company.forEach((collaborator) => {
     return resp.status(200).json(collaborator.employees);
  })
  
  }catch(err){
    return resp.status(500).json(err);
  }
  }
exports.createCollaborator = async (req, res) =>{
  try{
    const {idCompany, nome, email, cpf, situation, position} = req.body;
    const company = await Collaborator.findOne({idCompany: idCompany});
    company.employees.push({nome, email, cpf, situation, position});
   await company.save();
   return res.status(200).json({
    'message': 'Colaborador criado com sucesso '+nome
   });
  }catch(err){
    return res.status(500).json(err);
  }
};

exports.deleteCollaborator = async (req, res) =>{
 try{
 // idT = id da tarefa
  // idC = id da empresa
  const {idCollaborator, idCompany} = req.params
  // return console.log(idCollaborator, idCompany)
  const company = await Collaborator.findOne({idCompany: idCompany});
  // return console.log(company)
const taskIndex = company.employees.findIndex((collaborador) => collaborador._id == idCollaborator);
// return console.log(taskIndex);
// console.log(company)
    if (taskIndex === -1) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    company.employees.splice(taskIndex, 1);
    await company.save();
  
  return res.status(200).json({
    message: 'Colaborador excluído com sucesso',
    erro: false
  });
 }catch(err){
   return res.status(500).json('ERRO INTERNO');
 }
} 
