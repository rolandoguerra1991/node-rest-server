const { request, response } = require("express");
const { validationResult } = require("express-validator");

module.exports = {
  validateFields: (req = request, res = response, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.errors });
    }

    next();
  },
};
