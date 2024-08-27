const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  nome: String,
  email: {
    type: String,
    // unique: true,
  },
  cnpj: {
    type: String,
  },
  company: String,
  password: String,

});

module.exports = mongoose.model('company', UserSchema);