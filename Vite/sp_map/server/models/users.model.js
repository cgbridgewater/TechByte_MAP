const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    // Created in the event name registration is required later
    userName: {
        type: String,
        required: [true, "A user name is required"]
    },
    address: {
        type: String,
        required: [true, "An address is required"]
    },
    coordinates: {
        type: Number,
        required: [true, "An address is required"]
    },
    JVM: {
        type: String,
    },
    instagram: {
        type: String,
    },
    facebook: {
        type: String,
    },
    spotify: {
        type: String,
    },
    email: {
        type: String,
        // required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }

}, {timestamps: true})

// add this after AdminSchema is defined
UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

    UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords must match!');
    }
    next();
});

// add this after the validate function
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => 
        {this.password = hash;
        next();
    });
});

module.exports = mongoose.model("User", UserSchema)