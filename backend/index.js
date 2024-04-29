require("dotenv").config();
const mongoConfig = require("./config/mongoConfig");
const route = require("./routes");
const express = require("express");
const app = express();

app.use(express.json());
mongoConfig();
app.use("/", route);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Port 8000 connected");
});
