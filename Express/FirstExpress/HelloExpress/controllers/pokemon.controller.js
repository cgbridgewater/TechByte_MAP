const { response } = require("express");

let pokemonList = [pokemon1, pokemon2, pokemon3];

module.exports = {
    index: (req, res) => {
        console.log(req);
        res.json({ message: "hello world!" });
    },
    getPokemon: (req,res) => {
        res.json({ pokemonList })
    },
    getOnePokemon: (req,res) => {
        const selectedPokemon = pokemonList.find(
            (p) => p.name.toLowerCase() === req.params.name.toLowerCase()
        );
        res.json(selectedPokemon)
    },
    createPokemon: (req, res) => {
        console.log(req.body);
        pokemonList.push(req.body);
        res.json({ message: "successfully created new pokemon!" })
    },
    updatePokemon: (req,res) => {
        console.log(req.params.name);
        const pokemonToUpdate = pokemonList.find(
            (p) => p.name.toLowerCase() === req.params.name.toLowerCase()
        );
        const index = pokemonList.indexOf(pokemonToUpdate);
        pokemonList[index] = req.body;
        res.json({ message: `${pokemonToUpdate.name} was updated!`});
    },
    deletePokemon: (req,res) => {
        console.log(req.params.name);
        const pokemonToDelete = pokemonList.find(
            (p) => p.name.toLowerCase() === req.params.name.toLowerCase()
        );
        pokemonList = pokemonList.filter((p) => p !== pokemonToDelete);
        res.json({ 
            message: `${pokemonToDelete.name} was successfully deleted!`
        })
            // .catch(err => 
            //     res.json({message: "Something went wrong!!"}, err)
            // );
    },
};