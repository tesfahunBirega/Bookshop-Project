const express = require("express");
// const connection = require("../connection");
const representativeRoute = express.Router();

const {
  createRepresentative,
  allRepresentatives,
  oneRepresentative
 
} = require("../controllers/represntative.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
 representativeRoute.post("/create", createRepresentative);
 representativeRoute.get("/all-projects", allRepresentatives);
 representativeRoute.get("/one-project/:id", oneRepresentative);

 representativeRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is representativessssssssss read page</h1>");
});

module.exports = representativeRoute;