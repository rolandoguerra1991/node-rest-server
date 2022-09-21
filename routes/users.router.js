const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", getUsers);

router.put("/:id", putUsers);

router.post("/", [
    check('email', 'the email is not valid').isEmail(),
], postUsers);

router.delete("/:id", deleteUsers);

module.exports = router;
