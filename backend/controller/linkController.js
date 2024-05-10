const user = require("../model/userModel");
var jwt = require("jsonwebtoken");

let linkController = async (req, res) => {
  const { token } = req.body;
  var decoded = jwt.verify(token, "shhhhh");
  console.log(decoded.email);

  let findUser = await user.findOne({ email: decoded.email });

  if (!findUser.emailVerified) {
    await user.findOneAndUpdate(
      { email: decoded.email },
      { emailVerified: true }
    );
    res.send("Milce");
  } else {
    res.send("Mile nai");
  }
};

module.exports = linkController;
