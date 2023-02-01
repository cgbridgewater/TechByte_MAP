const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports= {


    findAll : (req,res) => {
        User.find()
            .then(results => res.json(results))
            .catch(err => res.status(400).json(err))
    },

    register : (req, res) => {
        User.create(req.body)
            .then(newUser => {
                const userToken = jwt.sign({
                    id: newUser._id
                }, process.env.SECRET_KEY);
                res
                .cookie("usertoken", userToken, {httpOnly:true})
                .json({ msg: "Great Success, You are registered!", user: newUser });
            })
            .catch(err => res.status(400).json({message: "Problem with registration",error: err}));
    },

    login :async (req, res) => {
        const user = await User.findOne({email: req.body.email})
        if (user === null) {
            return res.status(400).json({message: "Invalid login"})
        }
        console.log(user)

        // CONGRATULATIONS YOU FOUND THE USER IN THE DATABASE
        const correctPassword = await bcrypt.compare(req.body.password, user.password)

        if (!correctPassword) {
            return res.status(400).json({message: "Invalid login"})
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        console.log(userToken);
     
        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: "success!" });

    },

    logout: (req,res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },

    getOne : (req, res) => {
        User.findOne({_id: req.params.id})
            .then(results => res.json(results))
            .catch((err) => res.status(400).json(err))
    },

    update : (req,res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then(updatedResults => res.json(updatedResults))
            .catch((err) => res.status(400).json(err))
    },

    delete : (req,res) => {
        User.deleteOne({ _id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json({message: "Something went wrong with Delete",err}))
    } 

}