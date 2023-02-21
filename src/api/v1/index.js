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

app.use("/customers", require("./routes/customers.routes"));
app.use("/books", require("./routes/books.routes"));
app.use("/author", require("./routes/authors.routes"));



module.exports = app;
