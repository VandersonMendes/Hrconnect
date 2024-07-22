
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
module.exports = (req, res, next) => {
  
  const token = req.header('Authorization').replace('Bearer ', '');
  if(!token) {
    return res.status(401).json({
      message: token,
      error: true
    })
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = decoded;
    next();
  } catch (error) {
    res.json({ error: 'Token inválido' });
  }
}