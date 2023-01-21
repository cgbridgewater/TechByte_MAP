const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');


const AuthorSchema = mongoose.Schema({

    author: { 
        type: String, index: {unique: true, dropDups: true},
        // unique: 'Two users cannot share the same username ({VALUE})',
        // unique: true
        // unique : '({VALUE}) exists in the database already',    
        required: [true, "Author Name required"],
        minLength: [3, "Author Name must be at least 3 characters long"],
        // dropDups: [true, "Duplicate was removed!"]
    },

},{ timestamps: true });

AuthorSchema.plugin(beautifyUnique);

module.exports = mongoose.model("Author", AuthorSchema)