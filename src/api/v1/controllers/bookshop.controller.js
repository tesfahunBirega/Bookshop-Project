const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const { request } = require("express");

const prisma = new PrismaClient();

const getallBook = asyncHandler(async (req, res) => {
  try {
    const book = await prisma.books.findMany();
    if (book) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `All book find successfully!!!`,
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



/**@description create user
 * @api api/v1/user/create
 * @access PUBLIC
 * @type POST
 */
const searchISBN = asyncHandler(async (req, res) => {
  try {
    const { ISBN } = req.params;
    console.log(ISBN);
    const book = await prisma.books.findMany({
      where: {
        ISBN:Number(ISBN),
      },
    });
    console.log(book);
    if (book) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `${book.name} find successfully!!!`,
        data: book,
      });
    }
    else{
      return res.status(201).json({
        success: true,
        status: 201,
        message: `is not found find successfully!!!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});

const   searchAuthor = asyncHandler(async (req, res) => {
  try {
    const { author } = req.params;
    console.log(author);
    const book = await prisma.books.findMany({
      where: {
        author:author,
      },
    });
    console.log(book);
    if (book) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `${book.name} find successfully!!!`,
        data: book,
      });
    }
    else{
      return res.status(201).json({
        success: true,
        status: 201,
        message: `is not found find successfully!!!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});

const   searchTitle = asyncHandler(async (req, res) => {
  try {
    const { title } = req.params;
    console.log(title);
    const book = await prisma.books.findMany({
      where: {
        title:title,
      },
    });
    console.log(book);
    if (book) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `${book.name} find successfully!!!`,
        data: book,
      });
    }
    else{
      return res.status(201).json({
        success: true,
        status: 201,
        message: `is not found find successfully!!!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});

const searchReview = asyncHandler(async (req, res) => {
  try {
    const { review } = req.params;
    console.log(review);
    const book = await prisma.books.findMany({
      where: {
        review:review,
      },
    });
    console.log(book);
    if (book) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: `${book.name} find successfully!!!`,
        data: book,
      });
    }
    else{
      return res.status(201).json({
        success: true,
        status: 201,
        message: `is not found find successfully!!!`,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});
const register = asyncHandler(async (req, res) => {
  try {
    let { name, email, password } = req.body;
   console.log(req.body);
    const user = await prisma.users.create({
      data: {
        name:name,
        email:email,
        password:password,
      },
    });
console.log(user);
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

const createBook = asyncHandler(async (req, res) => {
  try {
    let { name, ISBN, author,title,review } = req.body;
   console.log(req.body);
    const book = await prisma.books.create({
      data: {
        name:name,
        ISBN:ISBN,
        author:author,
        title:title,
        review:review
      
      },
    });
console.log(book);
    if (book) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: "Book created successfully!!!",
        data:book,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});
const modifyReview = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);
    let { review } = req.body;
    console.log(review);
    const book = await prisma.books.update({
      where: {
        id: Number(id),
      },
      data: {
        review: review,
      },
    });
    console.log(book);
    if (book) {
      return res.status(201).json({
        success: true,
        status: 201,
        message: "book updated successfully!!!",
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

const login = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  // console.log(email)
  // console.log(password)

  try {
    const user = await prisma.users.findFirst({
      where: {
        email:email,
      },
    });
  console.log(user)

    /**@check if user exists*/
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found.",
      });
    } else {
      let userInfo = {
        id: user.id,
        name: user.name,
        email: user.email,
      };
      console.log(user, "is user")
      if (user) {
        res.status(200).json({
          success: true,
          data: userInfo,
          // accessToken: generateToken(user),
          message: "You are logged in successfully!!!",
        });
      } else {
        res.status(400);
        throw new Error("Invalid credentials");
      }
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: error.code,
    });
  }
});
const deleteReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await prisma.books.delete({
    where: {
      id: Number(id),
    },
  });
  if (book) {
    return res.status(201).json({
      success: true,
      status: 201,
      message: `${book.name} deleted successfully!!!`,
      data: book,
    });
  }
});

module.exports = {
  register,
  getallBook,
  login,
  createBook,
  searchISBN,
  searchAuthor,
  searchTitle,
  searchReview,
  modifyReview,
  deleteReview
};
