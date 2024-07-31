const express = require('express');
const dotenv = require('dotenv');
const routesAuth = require('./routes/auth');
const routesHome = require('./routes/home')
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

app.use('/auth', routesAuth);
app.use('/home', routesHome);
