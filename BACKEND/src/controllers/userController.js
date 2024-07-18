
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/user');
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
exports.token = async (req, res) =>{
  res.json({ message: 'Esta é uma rota protegida', user: req.user });
}
exports.getUser = async (req, res) =>{
    try {
    const user = await User.findById(req.params.id).select('-password');
    return res.json(user);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}