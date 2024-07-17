const UserModel = require('../../models/user');
module.exports = async function checkEmail(req, res, next) {
  if(!req.body.email) {
    return res.status(401).json({
      message: 'Email obrigatorio',
      erro: true
    });
  }
   await UserModel.findOne({email: req.body.email}).then((user) => {
    if(user) {
      return res.status(401).json({
        message: 'Email ja existe',
        erro: true
      });
    }
    next();
  })
}



