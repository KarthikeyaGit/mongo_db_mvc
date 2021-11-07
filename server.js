const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://Admin:123456@localhost:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

require("./Routes/User.Router")(app);
require("./Routes/Login.Router")(app);


// app.get("/", (req, res) => {
//   db.collection("Users")
//     .find({email:"test@test.com"})
//     .toArray(function (err, result) {
//       if (err) throw res.send(err);
//       res.send(result);
//     });
// });

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(4000, () => {
  console.log("Server listening on port " + 4000);
});
