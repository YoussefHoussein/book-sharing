const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
})

const bookSchema = new mongoose.Schema({
name: String,
author: String,
picture: String,
review: String,
likes : [likeSchema],
})


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
  books: [bookSchema],
})

const model = mongoose.model("User", userSchema)
module.exports = model;