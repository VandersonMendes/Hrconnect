const User = require('../models/user');
exports.getUser = async (req, res) =>{
    try {
    const user = await User.findById(req.params.id).select('-password');
    return res.json(user);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}