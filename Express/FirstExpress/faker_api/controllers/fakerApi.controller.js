const { response } = require("express");

// let pokemonList = [pokemon1, pokemon2, pokemon3];

module.exports = {
    index: (req, res) => {
        // console.log(req);
        res.json("Welcome to Faker-API" );
    },
}


//add CRUD as needed!!!!