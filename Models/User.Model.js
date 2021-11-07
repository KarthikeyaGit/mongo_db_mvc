const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  { collection: "Users" }
);

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
