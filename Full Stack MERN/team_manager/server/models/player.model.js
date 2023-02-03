const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Player Name Required"],
        minlenth: [2, "Name must be at least 2 characters long"]
    },
    position: { 
        type: String,
    },
    statusGame1: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },
    statusGame2: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    },
    statusGame3: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
    }
}, { timestamps: true }); 
module.exports = mongoose.model('Player',PlayerSchema);

