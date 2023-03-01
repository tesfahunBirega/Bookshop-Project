const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const { request } = require("express");

const prisma = new PrismaClient();

const createBook = asyncHandler(async (req, res) => {
  try {
    let { name, auth_id,title,ISBN } = req.body;

    const Books = await prisma.Books.create({
      data: {
        name: name,
        auth_id:auth_id,
        Title:title,
        ISBN:ISBN,


      },
    });

    if (Books) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: "Books created successfully!!!",
        data: Books,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});

const allBook = asyncHandler(async (req, res) => {
    try {
      const Books = await prisma.Books.findMany();
      if (Books) {
        return res.status(201).json({
          success: true,
          status: 201,
          message: `All Books find successfully!!!`,
          data: Books,
        });
      }
    } catch (error) {
      res.status(400).json({
        error: error,
        message: error.code,
      });
    }
  });

  
const oneBook = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const Books = await prisma.Books.findUniqueOrThrow({
        where: {
          id: Number(id),
        },
      });
      if (Books) {
        return res.status(201).json({
          success: true,
          status: 201,
          message: `${Books.name} find successfully!!!`,
          data: Books,
        });
      }
    } catch (error) {
      res.status(400).json({
        error: error,
        message: error.code,
      });
    }
  });
  const oneBookISBN = asyncHandler(async (req, res) => {
    try {
      const { isbn } = req.body;
      console.log(req.body);
      console.log(isbn);
      const book = await prisma.books.findUniqueOrThrow({
        where: {
          isbn:isbn,
        },
      });
      if (book) {
        return res.status(201).json({
          success: true,
          status: 201,
          message: `${book.name} find successfully!!!`,
          data: book,
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
  createBook,
  oneBook,
  allBook,
  oneBookISBN

};
