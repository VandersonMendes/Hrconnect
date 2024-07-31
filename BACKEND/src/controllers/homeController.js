const User = require('../models/user');
exports.getUser = async (req, res) =>{
 try{
   const id = req.params.id;
    const data = await User.findById(id).select('-password');
   return res.status(200).json({data});
 }catch(err){
   return res.status(500).json(err);
 }
}