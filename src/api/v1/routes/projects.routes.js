const express = require("express");
// const connection = require("../connection");
const projectRoute = express.Router();

const {
  createProject,
  allProjects,
  oneProject
 
} = require("../controllers/project.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
projectRoute.post("/create", createProject);
projectRoute.get("/all-projects", allProjects);
projectRoute.get("/one-project/:id", oneProject);

projectRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is Projectttttt read page</h1>");
});

module.exports = projectRoute;