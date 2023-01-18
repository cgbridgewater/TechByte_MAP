const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "First name required"],
        minlenth: [2, "First name must be at least 2 characters long"]
    },
    lastName: { 
        type: String,
        required: [true, "Last name required"],
        minlenth: [2, "Last name must be at least 2 characters long"]
    },
    age: {
        type: Number,
        required: [true, "Age required"]    
    }
}, { timestamps: true }); 
module.exports = mongoose.model('Person',PersonSchema);

