const User = require("../models/user.model")

const getUsers = async (req,res) => {
    try{
        const user = await User.findById(req.user._id);
        const followings = user.followings
        const users = await User.find({ _id: { $nin: [...followings, user._id] } });
        console.log(users)
        res.send(users)
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

const getFollowing = async (req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        const followings = user.followings
        console.log(followings)
        res.send(followings)
    }
    catch(error){
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {getUsers,getFollowing}