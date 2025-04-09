const User = require('../models/User');

const getUsers = async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const image = req.file ? req.file.filename : null;

  const newUser = new User({ name, email, image });
  await newUser.save();
  res.redirect('/');
};

module.exports = { getUsers, createUser };
