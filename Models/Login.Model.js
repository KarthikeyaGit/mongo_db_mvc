const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const LoginSchema = new Schema({
     email: String,
  password: String
},{collection: 'Users'});

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;