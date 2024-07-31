
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/user');
exports.registerUser = async (req, res) => {
  const {nome, email, cnpj, company, password } = req.body;
  try{
         const hashedPassword = await bcrypt.hash(password, 10);
    const userNew = new User({
      nome, email, cnpj, company, password: hashedPassword
    })
  await userNew.save();
  res.status(200).json('Usuário criado');
  } catch (err) {
    res.status(500).json(err);
  }
}
exports.existEmail = async (req, res) =>{
     await UserModel.findOne({email: req.body.email}).then((user) => {
    if(user) {
      return res.status(401).json({
        message: 'Email ja existe',
        erro: true
      });
    }
     });
}
exports.login = async (req, res) =>{
    const {email, password } = req.body;
      const user = await User.findOne({ email });
     const isMatch = bcrypt.compare(password, user.password);
      if(!isMatch) {
        return res.status(400).json({ message: 'Password Invalido' });
      }
      const payload = {
            user: {
                id: user.id,
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
}
exports.token = async (req, res) =>{
  res.json({ message: 'Esta é uma rota protegida', user: req.user });
}
