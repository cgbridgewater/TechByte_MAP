const User = require("../models/user.model");
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World!"
    });
}

module.exports.create = (req,res) => {
    User.create(req.body)
        .then(item => res.json(item))
        .catch(err => {
            res.status(400).json(err)
        });
}

module.exports.getAll = (req,res) => {
    User.find({})
        .then(results => {
            console.log(results);
            res.json(results);
        })
        .catch(err => {
            console.log(err)
            .catch((err) => res.status(400).json(err))
        })
}


module.exports.getOne = (req, res) => {
    User.findOne({_id: req.params.id})
        .then(results => res.json(results))
        .catch((err) => res.status(400).json(err))
}


module.exports.update = (req,res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedResults => res.json(updatedResults))
        .catch((err) => res.status(400).json(err))
}


module.exports.deleteItem = (req,res) => {
    User.deleteOne({ _id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "Something went wrong with Delete",err}))
} 

register: (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "Great Success!", user: user });
        })
        .catch(err => res.json(err));
}
