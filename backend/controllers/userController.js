const User = require('../models/user');

exports.createUser = async (req, res) => {

    const userData = req.body;
    const user = await User.create(userData);
    res.json(user);

};

exports.getAllUsers = async (req, res) => {

    const users = await User.findAll();
    res.json(users);

};

exports.deleteUser = async (req, res) => {
 
    const userId = req.params.id;
    await User.destroy({
      where: {
        id: userId,
      },
    });
    res.send(`User ${userId} deleted successfully`);
  
};
