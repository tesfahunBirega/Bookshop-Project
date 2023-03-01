const express = require("express");
// const connection = require("../connection");
const authorRoute = express.Router();

const {
  createAuthor,
  allAuthor,
  oneAuthor
 
} = require("../controllers/author.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
authorRoute.post("/create", createAuthor);
 authorRoute.get("/", allAuthor);
 authorRoute.get("/:id", oneAuthor);
 authorRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is Authors read page</h1>");
});

module.exports = authorRoute;