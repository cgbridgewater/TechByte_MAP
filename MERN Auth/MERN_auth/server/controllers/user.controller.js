const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports= {


    getAll : (req,res) => {
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
                .json({ msg: "Great Success!", user: newUser });
            })
            .catch(err => res.status(400).json({message: "Problem with registration",error: err}));
    },

    login : async (req,res)  => {
        const user = await User.findOne({email: req.body.email})
        if(!user) {
            return res.status(400).json({message: "Invalid login"})
        }
        // CONGRATULATIONS you found the user in database
        const correctPassword = await bcrypt.compare(req.body.password, user.password)

        if (!correctPassword) {
            return res.status(400).json({message: "Invalid login"});
        }
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
        res 
        .cookie("usertoken", userToken, {httpOnly:true})
        .json({ msg: "Great Success!", user: newUser });    
    },

    logout: (req,res) => {
        res.clearCookie('userToken');
        res.sendStatus(200);
    },

    // index : (req, res) => {
    //     res.json({
    //         message: "Hello World!"
    //     });
    // },

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

    deleteItem : (req,res) => {
        User.deleteOne({ _id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json({message: "Something went wrong with Delete",err}))
    } 

}