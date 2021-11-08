const Login = require("../Models/Login.Model");



exports.login = (req, res) => {
    console.log("req", req.body)
    Login.findOne({email: req.body.email, password: req.body.password})
    .then((data) => {
      if(data === null) {
        console.log("data", data)
        res.send({
          hasError: true,
          message:"Invalid Email or Password"
        });
      } else {
        res.status(200).send(
          {
            hasError: false,
            message:"Logged in successfully"
          })
      }
    
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};