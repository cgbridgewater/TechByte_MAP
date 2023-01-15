const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String}
}, { timestamps: true});
module.exports = mongoose.model("Item", ItemSchema)