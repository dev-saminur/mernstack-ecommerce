const user = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let newPassController = async (req, res) => {
  const { token, password } = req.body;
  var decoded = jwt.verify(token, "shhhhh");
  console.log(decoded.email);

  bcrypt.hash(password, 10, async function (err, hash) {
    await user.findOneAndUpdate({ email: decoded.email }, { password: hash });
    res.send({ success: "Password Changed" });
  });
};

module.exports = newPassController;
