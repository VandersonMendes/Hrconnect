// const verificEmailExist = require("../login/verificEmailExist");
const User = require('../../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
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

      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) {
        return res.status(400).json({ message: 'Password Invalido' });
      }
      const payload = {
            user: {
                id: user.id,
                email: user.email
            }
        };
        jwt.sign(
            payload,
            process.env.TOKEN_SECRET,
            { expiresIn: '2h' },
            (err, token) => {
                if (err) throw err;
                return res.status(200).json({ token });
            }
        );


  }catch(err){
    return res.status(500).json({
      message: "Erro interno",
      erro: true
    })
  }
  
  next();
}