const Users = require("../Models/User.Model");



exports.findAll = (req, res) => {
  Users.find()
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

exports.findByEmail = (req, res) => {
  Users.findOne({"email":req.body.email})
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving messages.",
    });

  })
}

exports.updateByEmail = (req, res) => {
  Users.findOneAndUpdate( {id:req.body.id},
    { $set: { "email": `${req.body.email}` } },
    {new:true, }
  )
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving messages.",
    });

  })
}