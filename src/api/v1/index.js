const express = require("express");
// const connection = require("./connection");
// const router = require("./routes/users.routes");
//const roleRoute = require("./api/v1/routes/");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", require("./routes/users.routes"));

app.get("/", (req, res) => {
  res.send("<h1>This is user index page</h1>");
});

module.exports = app;
