const express = require("express");
const app = express();
const PORT = 8000;
const { pokemon1, pokemon2, pokemon3 } = require("./data/pokemon");
const { response } = require("express");

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this sends the app function to the routes
require("./routes/pokemon.routes")(app);

// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`));