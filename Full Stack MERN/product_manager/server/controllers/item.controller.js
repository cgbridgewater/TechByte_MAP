const Item = require("../models/item.model");
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World!"
    });
}

module.exports.createItem = (req,res) => {
    Item.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.json(err));
}


module.exports.getAllItems = (req,res) => {
    Item.find({})
        .then(items => {
            console.log(items);
            res.json(items);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}


module.exports.getOneItem = (req, res) => {
    Item.findOne({_id: req.params.id})
        .then(item => res.json(item))
        .catch(err => res.json(err));
}


module.exports.updateItem = (req,res) => {
    Item.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedItem => res.json(updatedItem))
        .catch(err => res.json(err))
}


module.exports.deleteItem = (req,res) => {
    Item.deleteOne({ _id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
} 