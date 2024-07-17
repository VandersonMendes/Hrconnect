
const dotenv = require('dotenv');
dotenv.config();

exports.registerUser = async (req, res) => {
  try{
    res.status(200).json('usuario criado com sucesso');
  } catch (err) {
    res.status(500).json(err);
  }
}
exports.existEmail = (req, res) =>{
    try{
      return res.status(200).json('Email disponível');
    }catch (err) {
      return res.status(500).json(err);
    }
}
exports.resetPassword = (req, res) =>{
    try{
      return res.status(200).json('Senha alterada');
    }catch (err) {
      return res.status(500).json(err);
    }
}
exports.login = (req, res) =>{
    // try{
    //   return res.status(200).json('Login efetuado com sucesso');
    // }catch (err) {
    //   return res.status(500).json(err);
    // }
}
exports.token = (req, res) =>{
    try{
      return res.status(200).json('Token gerado com sucesso');
    }catch (err) {
      return res.status(500).json(err);
    }
}