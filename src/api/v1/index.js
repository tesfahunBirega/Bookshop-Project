const express = require("express");
// const connection = require("./connection");
// const userRouter = require("./routes/users.routes");
//const roleRoute = require("./api/v1/routes/");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>This is Advanced CRUD Home page</h1>");
});

app.use("/user", require("./routes/users.routes"));
app.use("/client", require("./routes/clients.routes"));
app.use("/project", require("./routes/projects.routes"));
app.use("/representative", require("./routes/representatives.routes"));
// app.use("/sector", require("./routes/sectors.routes"));
// app.use("/solution", require("./routes/solutions.routes"));
// app.use("/vendor", require("./routes/vendors.routes"));


module.exports = app;
