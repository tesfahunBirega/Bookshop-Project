const express = require("express");
// const connection = require("../connection");
const bookRoute = express.Router();

const {
  createBook,
  allBook,
  oneBook,
  oneBookISBN
} = require("../controllers/book.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
bookRoute.post("/create", createBook);
bookRoute.get("/", allBook);
bookRoute.get("/ISBN", oneBookISBN);
// bookRoute.post("/:author", searchbyauthor);
bookRoute.get("/:id", oneBook);

bookRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is books read page</h1>");
});

module.exports = bookRoute;