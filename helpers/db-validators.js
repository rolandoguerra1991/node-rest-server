const Role = require("../models/role.model");
const User = require("../models/user.model");

module.exports = {
  isValidRole: async (role = "") => {
    const roleExist = await Role.findOne({ name: role });
    if (!roleExist) {
      throw new Error(`The role ${role} does not exist`);
    }
  },
  emailAlreadyExist: async (email = '') => {
    const emailAlreadyExist = await User.findOne({ email });
    if (emailAlreadyExist) {
      throw new Error('A user with this email already exists.');
    }
  },
};
