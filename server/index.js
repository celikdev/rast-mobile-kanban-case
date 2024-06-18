const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const CORS = require("cors");
const connect = require("./utils/db/connect");
const MainRouter = require("./routes");

const app = express();
app.use(CORS());
dotenv.config();
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

connect();

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.use("/api", MainRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
