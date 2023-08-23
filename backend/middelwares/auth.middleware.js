const jwt = require("jsonwebtoken");
require("dotenv").config();
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  console.log(token)
  if (!token) return res.status(401).send({ message: 'Unauthorized' })

  try {
    const decoded = jwt.verify(token, process.env.SERCRET_KEY);
    req.user = decoded
    console.log("test")
    next();

  } catch (error) {
    console.log("error"+error)
    return res.status(401).send({ message: 'Unauthorized' })
  }

}

module.exports = authMiddleware