const { request, response } = require("express");
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

module.exports = {
  getUsers: (req = request, res = response) => {
    const query = req.query;

    res.json({
      message: "GET API - controller",
      query
    });
  },
  postUsers: async (req = request, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    const salt = bcrypt.genSaltSync();
    
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({ user });
  },
  putUsers: (req = request, res = response) => {
    const { id } = req.params;
    res.json({
      message: "PUT API - controller",
      id
    });
  },
  deleteUsers: (req = request, res = response) => {
    res.json({
      message: "DELETE API - controller",
    });
  },
};
