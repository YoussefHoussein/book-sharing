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

const like = async (req,res) => {
    try{
        const user = await User.findById(req.user._id);
        const book_owner = await User.findById(req.body.book_owner)
        const book = book_owner.books.id(req.body.book_id)
    
        const liked_index = book.likes.findIndex(item => item.user.equals(user._id))
    
        if(liked_index !== -1) {
            book.likes.splice(liked_index,1)
            res.send("unliked")
            await book_owner.save()

        }
        else{
            book.likes.push({ user : user._id})
            res.send("liked")
            await book_owner.save()
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send("An error occurred");
    }
   

}

const search = async (req,res)=>{
    const text = req.body.text;

    try {
        const search_results = await User.find({
          $or: [
            { 'books.name': { $regex: text, $options: 'i' } }, 
            { 'books.author': { $regex: text, $options: 'i' } }, 
          ],
        });
    
       
        const matched_books = search_results.flatMap(user =>
          user.books.filter(book =>
            book.name.match(new RegExp(text, 'i')) ||
            book.author.match(new RegExp(text, 'i'))
          )
        );
    
        res.send(matched_books);
        console.log(matched_books)
      } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}


module.exports = {shareBook,getMyBooks,like,search}
