const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema({
    title: { 
        type: String ,
        required: [true, "Title required!"],
        minlenth: [2, "Title must be at least 2 characters long!"]
    },
    price: { 
        type: Number,
        required: [true, "Price required!"],
    },
    description: { 
        type: String,
        required: [true, "Description required!"],
        minlenth: [2, "Description must be at least 2 characters long!"]}
}, { timestamps: true});
module.exports = mongoose.model("Item", ItemSchema)