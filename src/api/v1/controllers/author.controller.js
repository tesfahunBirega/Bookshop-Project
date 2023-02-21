const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const { request } = require("express");

const prisma = new PrismaClient();

const createAuthor = asyncHandler(async (req, res) => {
  try {
    let { name, description } = req.body;

    const representative = await prisma.representative_info.create({
      data: {
        name: name,
        description: description,

      },
    });

    if (representative) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: "project created successfully!!!",
        data: representative,
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
      const representative = await prisma.representative_info.findMany();
      if (project) {
        return res.status(201).json({
          success: true,
          status: 201,
          message: `All Project find successfully!!!`,
          data: representative,
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
      const representative = await prisma.representative_info.findUniqueOrThrow({
        where: {
          id: Number(id),
        },
      });
      if (representative) {
        return res.status(201).json({
          success: true,
          status: 201,
          message: `${project.name} find successfully!!!`,
          data: representative,
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
