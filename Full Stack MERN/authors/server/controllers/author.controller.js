const Author = require("../models/author.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World!"
    });
}

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(400).json(err)
        });
}

module.exports.getAllAuthors = (req,res) => {
    Author.find({})
        .then(result => {
            console.log(result);
            res.json(result);
        })
        .catch(err => {
            console.log(err)
            .catch((err) => res.status(400).json(err))
        })
}


module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch((err) => res.status(400).json(err))
}


module.exports.updateAuthor = (req,res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updated => res.json(updated))
        .catch((err) => res.status(400).json(err))
}


module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({ _id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json({message: "Something went wrong with Delete",err}))
} 