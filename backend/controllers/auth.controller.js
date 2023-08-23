const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
require('dotenv').config();

const login = async (req, res)=>{
    const {email: login, password} = req.body;
    const user = await User.findOne({email: login})
    if(!user) return res.status(404).send({message: "email/password incorrect"});
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) return res.status(404).send({message: "email/password incorrect"});

    const {password: hashedPassword, name, email, _id, ...userInfo} = user.toJSON();
    const token = jwt.sign({name, email, _id}, process.env.SERCRET_KEY)
    res.send({
        token,
        user: userInfo
    })

}

const register = async(req, res)=>{
    const {password,email,name} = req.body

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name:name,
        email: email,
        password: hashedPassword
    });
    console.log(user);
    await user.save()

    res.send(user)
    
}


const verify = (_, res)=>{
    res.send("Verfied")
}

module.exports = {login, register, verify}