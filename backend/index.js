require("dotenv").config();
const express = require("express");
const route = require("./routes");
const cors = require("cors");

const app = express();
const mongoConfig = require("./config/mongoConfig");

mongoConfig();
app.use(cors());
app.use(express.json());
app.use("/", route);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Port 8000 connected");
});
