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

const follow = async (req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        

        const followed_id= req.body.followed_id;
        
        const followed_user = await User.findById(followed_id)
        
        const followedIndex = user.followings.findIndex(item => item.followed.equals(followed_user._id));

        if (followedIndex !== -1) {
            console.log("Unfollowed");
            user.followings.splice(followedIndex, 1);
            await user.save();
            res.send("Unfollowed successfully");
        } else {
            user.followings.push({ followed: followed_user._id });
            await user.save();
            res.send("Followed successfully");
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {getUsers,getFollowing,follow}