const User = require("../model/userModel");
const nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");

let forgotpassController = async (req, res) => {
  const { email } = req.body;

  let excistingUser = await User.find({ email: email });
  console.log(excistingUser);
  if (excistingUser.length > 0) {
    console.log(excistingUser);
    jwt.sign({ email: email }, "shhhhh", async function (err, token) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "saminur9125@gmail.com",
          pass: "iglr jkzb rrlr vapt ",
        },
      });
      const info = await transporter.sendMail({
        from: ` "MERNIAN"`, // sender address
        to: email, // list of receivers
        subject: "This is your new password link", // Subject line
        // html: `Here is your <b> OTP:</b> ${otp}`,  // jodi shudu otp pathai tahole aivabe hbe
        html: `<a href="http://localhost:5173/newpassword/${token}"> Click Here`, //email Link verification
      });
    });
  } else {
    res.send({ error: "user not found" });
  }
};
module.exports = forgotpassController;
