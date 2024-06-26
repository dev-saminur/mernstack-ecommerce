const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  emailVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["Admin", "Marchant", "User"],
    default: "User",
  },
  otp: String,
});

module.exports = mongoose.model("User", userSchema);
