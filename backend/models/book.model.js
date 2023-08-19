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

const model = mongoose.model("Book", userSchema)
module.exports = model;