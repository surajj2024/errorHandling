const express = require("express");
const RegisterRouter = express.Router();
const createUser = require("../controller/createUser");

RegisterRouter.post("/createUser", createUser);

module.exports = RegisterRouter;
