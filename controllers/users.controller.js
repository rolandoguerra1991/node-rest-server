const { request, response } = require("express");

module.exports = {
  getUsers: (req = request, res = response) => {
    const query = req.query;

    res.json({
      message: "GET API - controller",
      query
    });
  },
  postUsers: (req = request, res = response) => {
    const { name, age } = req.body;

    res.json({
      message: "POST API - controller",
      name, 
      age
    });
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
