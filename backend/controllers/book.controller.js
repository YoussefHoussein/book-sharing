const User = require("../models/user.model")

const shareBook = async (req,res) => {
    try{
        const {name,author,picture,review} = req.body;
    
        const user = await User.findById(req.user._id);

        const newBook = {
            name,
            author,
            picture,
            review,
            likes: [],
        };

        user.books.push(newBook)

        await user.save();
        res.send({ message: 'Book added successfully' });
    }
    catch(err){
        res.status(500).json({ error: 'Internal server error' });
    }
    

}
const getMyBooks = async (req,res) => {
    const user = await User.findById(req.user._id);
    res.send(user.books)
}

const getUserById = async (req,res) => {
    const user = await User.findById(req.body.user_id)
    console.log(user)
    res.send(user)
}

module.exports = {shareBook,getMyBooks,getUserById}
