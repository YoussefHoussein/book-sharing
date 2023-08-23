const express = require("express")
const app = express();
require("dotenv").config()
const cors = require("cors")
const mongoDb = require("./configs/mongodb.connection");
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors())
app.use(express.json())

// const usersRoutes = require("./routes/user.route")
// app.use("/users", usersRoutes)

const authRoutes = require("./routes/auth.route")
app.use("/auth", authRoutes)

const bookRoutes = require("./routes/book.route")
app.use("/books", bookRoutes)

app.listen(8000, (err) => {
  if (err) {
    throw err
  }
  mongoDb()


  console.log("server is running on port: ", 8000)
})