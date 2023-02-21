const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const { request } = require("express");

const prisma = new PrismaClient();

const allCustomer = asyncHandler(async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    if (users) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `All Users find successfully!!!`,
        data: users,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});

const oneCustomer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const users = await prisma.users.findUniqueOrThrow({
      where: {
        id: Number(id),
      },
    });
    if (users) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `${users.name} find successfully!!!`,
        data: users,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});

/**@description create user
 * @api api/v1/user/create
 * @access PUBLIC
 * @type POST
 */

const createCustomer = asyncHandler(async (req, res) => {
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

const updateCustomer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    let { name, email, password } = req.body;
    const user = await prisma.users.update({
      where: {
        id: Number(id),
      },
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
        message: "User updated successfully!!!",
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

const deleteCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await prisma.users.delete({
    where: {
      id: Number(id),
    },
  });
  if (user) {
    return res.status(201).json({
      success: true,
      status: 201,
      message: `${user.name} deleted successfully!!!`,
      data: user,
    });
  }
});

module.exports = {
  createCustomer,
  oneCustomer,
  allCustomer,
  updateCustomer,
  deleteCustomer,
};
