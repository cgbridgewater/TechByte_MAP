const Person = require('../models/person.model')
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World!"
    });
}

module.exports.createPerson = (request, response) => {
    Person.create(request.body)
    .then(person => response.json(person))
    .catch(err => response.json(err));
}

module.exports.getAllPeople = (req,res) => {
    Person.find({})
        .then(person => {
            console.log(person)
            res.json(person);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        })
}

module.exports.getOnePerson = (req,res) => {
    Person.findOne({_id: req.params.id})
            .then(person => {
                console.log(person)
                res.json(person);
            })
            .catch(err => {
                console.log(err)
                res.json(err);
            })
    }

module.exports.updatePerson = (req,res) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPerson => {
            console.log(updatedPerson)
            res.json(updatedPerson);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        })
    }

    module.exports.deletePerson = (req,res) => {
        Person.deleteOne({ _id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    }








