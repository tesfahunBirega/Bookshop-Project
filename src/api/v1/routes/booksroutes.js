const express = require("express");
// const connection = require("../connection");
const userRoute = express.Router();

const {
  createUser,
  getallBook,
  deleteUser,
  register,
  login,
  createBook,
  searchISBN,
  searchAuthor,
  searchTitle,
  searchReview,
  modifyReview,
  deleteReview
} = require("../controllers/bookshop.controller");

/**
 * @swagger
 * user/all-users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder.
 */
userRoute.post("/usercreate", register);
userRoute.post("/createBook", createBook);
userRoute.get("/searchISBN/:ISBN", searchISBN);
userRoute.get("/searchAuthor/:author", searchAuthor);
userRoute.get("/searchTitle/:title", searchTitle);
userRoute.get("/searchReview/:review", searchReview);
userRoute.get("/modifyReview/:id", modifyReview);
userRoute.get("/deleteReview/:id", deleteReview);

userRoute.post("/login", login);
userRoute.get("/allBook", getallBook);

userRoute.get("/read", (req, res) => {
  const baseUrl = req.baseUrl;
  res.send("<h1>This is user read page</h1>");
});

module.exports = userRoute;
