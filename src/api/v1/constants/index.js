// const dotenv = require("dotenv").config();
const { PrismaClient } = required("@prisma/client");

const prisma = new PrismaClient();
const ENVT = process.env.APP_ENV;
const PORT = process.env.APP_PORT;
const SECRET = process.env.APP_SECRET;

module.exports = {};
