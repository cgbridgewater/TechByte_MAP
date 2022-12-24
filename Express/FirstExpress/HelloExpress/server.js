const express = require("express");
const app = express();
const PORT = 8000;
const { pokemon1, pokemon2, pokemon3 } = require("./data/pokemon");

let pokemonList = [pokemon1, pokemon2, pokemon3];

// req is short for request
// res is short for response
app.get("/", (req, res) => {
  console.log(req);
  res.json({ message: "hello world!" });
});

app.get("/pokemon", (req,res) => {
  res.json({ pokemonList })
})

// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );