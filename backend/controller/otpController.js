const user = require("../model/userModel");

let otpController = async (req, res) => {
  const { email, otp } = req.body;

  let findUser = await user.findOne({ email: email });

  if (!findUser.emailVerified && findUser.otp == otp) {
    await user.findOneAndUpdate(
      { email: email },
      { otp: "", emailVerified: true }
    );
    res.send("Milce");
  } else {
    res.send("Mile nai");
  }
};

module.exports = otpController;
