const Player = require('../models/player.model')


module.exports = {

    create : (req, res) => {
        Player.create(req.body)
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(err => res.status(400).json(err));
    },

    getAll : (req,res) => {
        Player.find({})
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(err => {
                console.log(err)
                .catch((err) => res.status(400).json(err))
            })
    },

    getOne : (req,res) => {
        Player.findOne({_id: req.params.id})
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(err => {
                console.log(err)
                .catch((err) => res.status(400).json(err))
            })
    },

    update : (req,res) => {
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(result => {
                console.log(result);
                res.json(result);
            })
            .catch(err => {
                console.log(err)
                .catch((err) => res.status(400).json(err))
            })
    },

    delete : (req,res) => {
        Player.deleteOne({ _id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch((err) => res.status(400).json(err))
    }
}





