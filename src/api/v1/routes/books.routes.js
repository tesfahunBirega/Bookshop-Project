const express = require("express");
// const connection = require("../connection");
const bookRoute = express.Router();

const {
  createBook,
  allBook,
  oneBook
 
} = require("../controllers/book.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
bookRoute.post("/create", createBook);
bookRoute.get("/all-projects", allBook);
bookRoute.get("/one-project/:id", oneBook);

bookRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is Projectttttt read page</h1>");
});

module.exports = bookRoute;