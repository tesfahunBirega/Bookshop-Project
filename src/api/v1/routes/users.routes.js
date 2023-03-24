const express = require("express");
// const connection = require("../connection");
const userRoute = express.Router();

const { createUser, allUsers } = require("../controllers/user.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
userRoute.get("/all-users", allUsers);
userRoute.post("/create", createUser);

userRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is user read page</h1>");
});

module.exports = userRoute;
