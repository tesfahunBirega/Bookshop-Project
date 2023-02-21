const express = require("express");
// const connection = require("../connection");
const customerRoute = express.Router();

const {
  createCustomer,
  allCustomer,
  oneCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
customerRoute.post("/create", createCustomer);
customerRoute.get("/all-users", allCustomer);
customerRoute.get("/one-user/:id", oneCustomer);
customerRoute.put("/update/:id", updateCustomer);
customerRoute.delete("/delete/:id", deleteCustomer);

customerRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is user read page</h1>");
});

module.exports = customerRoute;
