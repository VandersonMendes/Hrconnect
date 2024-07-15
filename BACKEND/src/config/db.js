const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectDB =  () => {
  try {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log('Conectado ao MongoDB');
    })
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  }
};

module.exports = connectDB;
