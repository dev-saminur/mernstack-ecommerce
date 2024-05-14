const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  status: {
    type: String,
    enum: ["approve", "waiting", "regect"],
    default: "waiting",
  },
});

module.exports = mongoose.model("category", categorySchema);
