const { Schema, model } = require("mongoose");

const RoleSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
});

const Role = model("Role", RoleSchema);

module.exports = Role;
