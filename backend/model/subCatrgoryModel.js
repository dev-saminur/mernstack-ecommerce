const mongoose = require("mongoose");
const { Schema } = mongoose;

const subCategorySchema = new Schema({
  name: String,
  status: {
    type: String,
    enum: ["approve", "waiting", "regect"],
    default: "waiting",
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
});

module.exports = mongoose.model("subCategory", subCategorySchema);
