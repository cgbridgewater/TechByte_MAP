const mongoose = require('mongoose');
const AuthorSchema = mongoose.Schema({

    author: { 
        type: String ,
        minlenth: [2, "Title must be at least 2 characters long"],
        required: [true, "Title required"],
        unique : [true, "This Author is already in database!"], 
        dropDups: [true, "Duplicate was removed!"]
    },

}, { timestamps: true});
module.exports = mongoose.model("Author", AuthorSchema)