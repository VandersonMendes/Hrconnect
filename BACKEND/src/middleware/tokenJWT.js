
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if(!token) {
    return res.status(401).json({
      message: 'Token inválido',
      error: true
    })
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if(err) {
      return res.status(401).json({
        message: 'Token inválido',
        error: true
      })
    }
    return res.status(200).json(decoded)
  })
}