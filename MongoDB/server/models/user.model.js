const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        // required: [true, "Name is required"],
        // minlength: [2, "Name must be at leaset 2 charachters long"]
    },
    age: {
        type: Number,
        // min: [1, "You must be at least 1 or older to register"],
        // max: [150, "You must be at most 149 years old to register"]
    },
    location: {
        type: String,
        // required: [true, "Location is required"],
        // minlength: [2, "Location must be at leaset 2 charachters long"]
    }
}, {timestamps: true});

const User = mongoose.model("User", UserSchema)

module.exports = User;