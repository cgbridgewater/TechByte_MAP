const mongoose = require('mongoose');
const AuthorSchema = mongoose.Schema({

    author: { 
        type: String,  
        required: [true, "Author Name required"],
        minLength: [3, "Author Name must be at least 3 characters long"],
    },

    books: {
    type: [String],
    // items: {
    //     book1:[],
    //     book2:[],
    //     book3:[],
    // },
    max: [2, "must be less than 3"]
    }

},{ timestamps: true });

module.exports = mongoose.model("Author", AuthorSchema)