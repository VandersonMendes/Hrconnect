
// app.post('/auth/login', async (req, resp) => {
//   const {email, password} = req.body;

//   if(!email || !password){
//     return resp.status(422).json({
//       msg: 'Os campos devem ser preenchidos corretamente!', 
//       error: true
//     });
//   }
//   // check if user exists
//   const user = await User.findOne({email});
//   if(!user){
//     return resp.status(422).json({
//       msg: 'O email ou senha estão incorretos!', 
//       error: true
//     });
//   }
//   const checkPassword = await bcrypt.compare(password, user.password);
//   if(!checkPassword){
//     return resp.status(422).json({
//       msg: 'O email ou senha estão incorretos!', 
//       error: true
//     });
//   }
//   // create token
//   const token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET);
//   return resp.status(200).json({
//     msg: 'Login realizado com sucesso', 
//     error: false,
//     token: token
//   });
  
// })

const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/auth');
const db = require('./config/db');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
db();

app.listen(PORT, () =>{
  console.log('Servidor está rodando na porta localhost',{PORT});
})

app.use('/auth', routes);
