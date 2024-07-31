// const verificEmailExist = require("../login/verificEmailExist");
const User = require('../../models/user');
const dotenv = require('dotenv');
dotenv.config();
module.exports = async function login(req, res, next) {
  const  {email, password} = req.body;
  if(!email || !password){
    return res.status(400).json({
      message: "Preencha corretamente os dados",
      erro: true
    })
  }
  try{
       const user = await User.findOne({ email });
      if(!user) {
        return res.status(400).json({ message: 'Email Invalido' });
      }

   


  }catch(err){
    return res.status(500).json({
      message: "Erro interno",
      erro: true
    })
  }
  
  next();
}