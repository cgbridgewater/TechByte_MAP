const express = require("express");
const app = express();
const PORT = 8000;
const { pokemon1, pokemon2, pokemon3 } = require("./data/pokemon");



// req is short for request
// res is short for response
app.get("/", (req, res) => {
  console.log(req);
  res.json({ message: "hello world!" });
});




// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );