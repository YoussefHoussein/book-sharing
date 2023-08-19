const mongoose = require("mongoose");
const book = require('./book.model')
const followingSchema = new mongoose.Schema({
    followed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
})

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: "Custom: Email is required"
  },
  password: String,
  name: String,
  followings: [followingSchema],
  books: [book.Schema],
})

const model = mongoose.model("User", userSchema)
module.exports = model;