const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middelwares/auth.middleware")

router.post("/getAllUsers",authMiddleware, userController.getUsers)
router.post("/getFollowings",authMiddleware, userController.getFollowing)
router.post("/follow",authMiddleware, userController.follow)

module.exports = router;