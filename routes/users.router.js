const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers,
} = require("../controllers/users.controller");

const { isValidRole, emailAlreadyExist } = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validateFields.middleware");

const router = Router();

router.get("/", getUsers);

router.put("/:id", putUsers);

router.post("/", [
    check('name', 'the name is required').not().isEmpty(),
    check('password', 'the password must be a minimum of 6 characters long.').isLength({ min: 6 }),
    check('email', 'the email is not valid').isEmail(),
    check('email').custom(emailAlreadyExist),
    check('role').custom(isValidRole),
    validateFields
], postUsers);

router.delete("/:id", deleteUsers);

module.exports = router;
