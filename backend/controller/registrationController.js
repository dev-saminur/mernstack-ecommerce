const User = require("../model/userModel");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");

let registrationController = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.send({ error: "Please fill the full form" });
  }
  if (password && password.length < 6) {
    return res.send({ error: "Password is too small" });
  }

  let excistingUser = await User.find({ email: email });
  console.log(excistingUser);
  if (excistingUser.length > 0) {
    return res.send({ error: `${email} already in use` });
  } else {
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log(otp);
    bcrypt.hash(password, 10, async function (err, hash) {
      let user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp,
      });
      user.save();
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
          subject: "This is your OTP", // Subject line
          text: "Hello world?", // plain text body
          // html: `Here is your <b> OTP:</b> ${otp}`,  // jodi shudu otp pathai tahole aivabe hbe
          html: `<a href="http://localhost:5173/emailverification/${token}"> Click Here`, //email Link verification
        });
      });

      // setTimeout(async () => {
      //   await user.findOneAndUpdate({ email: email }, { otp: "" });
      //   console.log("time Expired");
      // }, 10000); otp expired korte chaile aivabe korte hbe

      res.send({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    });
  }
};
module.exports = registrationController;
