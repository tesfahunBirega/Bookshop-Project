const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const { request } = require("express");

const prisma = new PrismaClient();

const allUsers = asyncHandler(async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
});

/**@description create user
 * @api api/v1/user/create
 * @access PUBLIC
 * @type POST
 */

const createUser = asyncHandler(async (req, res) => {
  try {
    let { name, email, password } = req.body;

    const user = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    if (user) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: "User created successfully!!!",
        data: user,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  try {
    let user = req.user;
  } catch (error) {}
});

module.exports = {
  createUser,
  allUsers,
};
