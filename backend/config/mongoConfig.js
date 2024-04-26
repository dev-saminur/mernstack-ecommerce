const mongoose = require("mongoose");

let mongoConfig = () => {
  mongoose
    .connect(
      "mongodb+srv://mernstackecommerce:dt35CeK9LFwPVDRj@cluster0.bcqlsvo.mongodb.net/fullstack?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Connected!"));
};

module.exports = mongoConfig;
