const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middelwares/auth.middleware");
router.post("/login", authController.login)
router.post("/register", authController.register)
router.get("/verify", authMiddleware, authController.verify)

module.exports = router;