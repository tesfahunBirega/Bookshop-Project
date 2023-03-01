const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const { request } = require("express");

const prisma = new PrismaClient();

const createAuthor = asyncHandler(async (req, res) => {
  try {
    let { firstName, lastName } = req.body;

    const Author = await prisma.authId.create({
      data: {
        firstName: firstName,
        lastName: lastName,


      },
    });

    if (Author) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: "Author created successfully!!!",
        data: Author,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});

const allAuthor = asyncHandler(async (req, res) => {
    try {
      const Author = await prisma.authId.findMany();
      if (Author) {
        return res.status(201).json({
          success: true,
          status: 201,
          message: `All Author find successfully!!!`,
          data: Author,
        });
      }
    } catch (error) {
      res.status(400).json({
        error: error,
        message: error.code,
      });
    }
  });

  
const oneAuthor = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const Author = await prisma.authId.findUniqueOrThrow({
        where: {
          id: Number(id),
        },
      });
      if (Author) {
        return res.status(201).json({
          success: true,
          status: 201,
          message: `${Author.name} find successfully!!!`,
          data: Author,
        });
      }
    } catch (error) {
      res.status(400).json({
        error: error,
        message: error.code,
      });
    }
  });
  

module.exports = {
  createAuthor,
  oneAuthor,
  allAuthor,

};
