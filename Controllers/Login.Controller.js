const Login = require("../Models/Login.Model");



exports.login = (req, res) => {
    Login.find({email: req.body.email, password: req.body.password})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};