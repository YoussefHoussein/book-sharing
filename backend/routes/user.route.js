const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middelwares/auth.middleware")

router.get("/getAllUsers", userController.getUsers)

module.exports = router;