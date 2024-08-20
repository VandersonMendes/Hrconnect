
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Company = require('../models/company');
const Collaborator = require('../models/collaborator');
exports.registerUser = async (req, res) => {
  const {nome, email, cnpj, company, password } = req.body;
  try{
    const hashedPassword = await bcrypt.hash(password, 10);
  const CompanyNew =  new Company({
      nome, email, cnpj, company, password: hashedPassword 
    })
  if(CompanyNew){
    const newListCollaborator = new Collaborator({idCompany: CompanyNew._id, employees: [], task: []})
         newListCollaborator.save();
       CompanyNew.save();
  }

   res.status(200).json({message: 'Usário criado com sucesso!'});
  } catch (err) {
    res.status(500).json(err);
  }
}
exports.existEmail = async (req, res) =>{
     await Company.findOne({email: req.body.email}).then((user) => {
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
      const user = await Company.findOne({ email });
     const isMatch = bcrypt.compareSync(password, user.password);
      if(!isMatch) {
        return res.status(400).json({ message: 'Password Invalido', erro:true });
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
