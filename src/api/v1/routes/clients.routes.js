const express = require("express");
// const connection = require("../connection");
const clientRoute = express.Router();

const {
  createClient,
  allClients,
  oneClient
 
} = require("../controllers/client.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
clientRoute.post("/create", createClient);
clientRoute.get("/all-clients", allClients);
clientRoute.get("/one-client/:id", oneClient);

clientRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is clienttttttttt read page</h1>");
});

module.exports = clientRoute;



// module.exports = clientRoute;
