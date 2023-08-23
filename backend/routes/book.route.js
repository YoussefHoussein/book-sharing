const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const authMiddleware = require("../middelwares/auth.middleware")

router.post("/insertbook",authMiddleware, bookController.shareBook)
router.post("/getBooks",authMiddleware, bookController.getMyBooks)


module.exports = router;