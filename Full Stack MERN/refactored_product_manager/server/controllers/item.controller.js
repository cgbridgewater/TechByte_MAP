const Item = require("../models/item.model");

module.exports = {

    index : (req, res) => {
        res.json({
            message: "Hello World!"
        });
    },

    createItem : (req,res) => {
        Item.create(req.body)
            .then(result => res.json(result))
            .catch(err => {
                res.status(400).json(err)
                // res.json({message: "Something went wrong with Create",err})
                // res.status(400).json(err)
            });
    },


    getAllItems : (req,res) => {
        Item.find({})
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(err => {
                console.log(err)
                res.json({message: "Something went wrong with Get All",err});
            })
    },


    getOneItem : (req, res) => {
        Item.findOne({_id: req.params.id})
            .then(result => res.json(result))
            .catch(err => res.json({message: "Something went wrong with Get One",err}));
    },


    updateItem : (req,res) => {
        Item.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(updatedResult => res.json(updatedResult))
            .catch(err => res.json({message: "Something went wrong with Update",err}))
    },


    deleteItem : (req,res) => {
        Item.deleteOne({ _id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json({message: "Something went wrong with Delete",err}))
    } 
}