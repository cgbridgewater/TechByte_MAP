const mongoose = require('mongoose');
const AuthorSchema = mongoose.Schema({

    author: { 
        type: String,  
        required: [true, "Author Name required"],
        minLength: [3, "Author Name must be at least 3 characters long"],
    },

    books: {
    type: [String],
    max: [2, "must be less than 3"]
    }

},{ timestamps: true });

module.exports = mongoose.model("Author", AuthorSchema)