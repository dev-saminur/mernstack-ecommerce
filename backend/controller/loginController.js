const bcrypt = require("bcrypt");
const user = require("../model/userModel");

let loginController = async (req, res) => {
  const { email, password } = req.body;

  let findUser = await user.findOne({ email: email });
  if (findUser) {
    bcrypt.compare(password, findUser.password, function (err, result) {
      console.log(result);
      if (result) {
        res.send({ success: "Login Successfull" });
      } else {
        res.send({ error: "Credencial not matched" });
      }
    });
  } else {
    res.send({ error: "User Not Found" });
  }
};

module.exports = loginController;
