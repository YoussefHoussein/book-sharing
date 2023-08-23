const User = require("../models/user.model")

const getUsers = async (_,res) => {
    const user = await User.find()
    console.log(user)
    res.send(user)
}

module.exports = {getUsers}