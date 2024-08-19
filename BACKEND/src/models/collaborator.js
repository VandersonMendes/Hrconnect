const mongoose = require('mongoose');
const employee =  new mongoose.Schema({
  nome: String,
  email: {
    type: String,
    unique: true,
  },
  cpf: {
    type: String,
  },
  situation: String,
  position: String
})
const createCollaborator = new mongoose.Schema({
  idCompany: {
    type: String,
    unique: true,
  },
  employees:[employee]


});

module.exports = mongoose.model('employees', createCollaborator);