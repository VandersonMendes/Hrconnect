const mongoose = require('mongoose');
const employee =  new mongoose.Schema({
  nome: String,
  email: {
    type: String,
    // unique: true,
  },
  cpf: {
    type: String,
  },
  situation: String,
  position: String
});
const task = new mongoose.Schema({
  taks: {
    type: String,
    require 
  },
  completed: Boolean
});
const createCollaborator = new mongoose.Schema({
  idCompany: {
    type: String,
    // unique: true,
  },
  employees:[employee],
  tasks: [task]


});

module.exports = mongoose.model('employees', createCollaborator);