const User = require("../models/users.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {


    // // // FIND ALL (for future build out use)
        findAll : (req,res) => {
            User.find()
                .then(results => res.json(results))
                .catch(err => res.status(400).json(err))
        },


    // // Check Cookies    // DO I NEED THIS??
    cookieTester : (req,res) => {
        User.find()
            .then(results => res.json({results}))
            .catch(err => res.status(400).json(err))
    },


    // // // REGISTER NEW USER
    register :async (req, res) => {
        // // Check if email is in use
        // const user = await User.findOne({email: req.body.email})
        // if (user !== null) {
        //     return res.status(400).json({message: "Email already exists!"})
        // }
        // // if email is origional create user
        User.create(req.body) // Create new user
            .then(newUser => {
                const userToken = jwt.sign({ // Create JWT Token
                    id: newUser._id // Get the new user id
                }, process.env.SECRET_KEY);
                res
                .cookie("usertoken", userToken, { // Create Cookie
                    httpOnly: true
                })
                .json({
                    msg: "Great Success, You are registered!",   // Send back success message
                    // user: user,
                    user: {
                        _id: newUser._id, // store user_id into cookie
                    },
                });
            })
            .catch(err => res.status(400).json({message: "Problem with registration",error: err}));
    },


    // // // LOG-IN USER
    login :async (req, res) => {
        const user = await User.findOne({email: req.body.email}) // Search for matching email
        if (user === null) {
            return res.status(400).json({message: "Invalid login"}) // If user does not exist, give error
        }
        const correctPassword = await bcrypt.compare(req.body.password, user.password) //User found in database
        // If password does not match stored password, give error
        if (!correctPassword) {
            return res.status(400).json({message: "Invalid login"}) // If stored password does not match given password give error
        }
        const userToken = jwt.sign({ // // Create JWT Token if user found and passwords match
            id: user._id
        }, process.env.SECRET_KEY);
        res
            .cookie("usertoken", userToken, { // Create cookie
                httpOnly: true
            })
            .json({
                msg: " Great success!",  // Send back success message
                user: {
                    _id: user._id, // store user_id into cookie
                },
            });
    },


    // // // GET ONE USER BY COOKIE/JWT
    getOne: (req, res) => {
    const userToken = req.cookies.usertoken;  // Get the user token from the cookie
    const decodedToken = jwt.verify(userToken, process.env.SECRET_KEY);  // Decode the token to get the user id
    User.findOne({ _id: decodedToken.id })  // Use the decoded user id to retrieve the user's profile
        .then(user => {
            if (!user) {  // Check if user exists
            return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        })
        .catch(err => res.status(400).json(err)); // Not logged, create error
    },


    // // // UPDATE USER (for future build out use)
        update : (req,res) => {
            const userToken = req.cookies.usertoken;  // Get the user token from the cookie
            const decodedToken = jwt.verify(userToken, process.env.SECRET_KEY);  // Decode the token to get the user id

            User.findOneAndUpdate({ _id: decodedToken.id }, req.body, {new:true, runValidators: true}) // Use the decoded user id to retrieve and update the user's profile
                .then(updatedResults => res.json(updatedResults))
                .catch((err) => res.status(400).json(err))
        },


    // // // DELETE USER (for future build out use)
    deleteUser : (req,res) => {
        const userToken = req.cookies.usertoken;  // Get the user token from the cookie
        const decodedToken = jwt.verify(userToken, process.env.SECRET_KEY);  // Decode the token to get the user id
        User.deleteOne({ _id: decodedToken.id })  // Use the decoded user id to retrieve the user's profile
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json({message: "Something went wrong with Delete",err}))
    }, 


    // // // LOG OUT (close cookie session)
    logout: (req,res) => {
        res.clearCookie('usertoken'); // End Cookie Session
        res.sendStatus(200);
    },
}