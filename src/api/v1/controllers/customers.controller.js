const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const { request } = require("express");

const prisma = new PrismaClient();

const allCustomer = asyncHandler(async (req, res) => {
  try {
    const customers = await prisma.customers.findMany();
    if (customers) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `All customers find successfully!!!`,
        data: customers,
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
    const customers = await prisma.customers.findUniqueOrThrow({
      where: {
        id: Number(id),
      },
    });
    if (customers) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `${customers.name} find successfully!!!`,
        data: customers,
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

    const customers = await prisma.customers.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    if (customers) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: "customers created successfully!!!",
        data: customers,
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
    const customers = await prisma.uscustomersers.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    if (customers) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: "customers updated successfully!!!",
        data: customers,
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
  const customers = await prisma.customers.delete({
    where: {
      id: Number(id),
    },
  });
  if (customers) {
    return res.status(201).json({
      success: true,
      status: 201,
      message: `${customers.name} deleted successfully!!!`,
      data: customers,
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
