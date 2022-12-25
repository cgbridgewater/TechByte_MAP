const fakerApiController = require("../controllers/fakerApi.controller");

module.exports = (app) => {
    app.get("/", fakerApiController.index);
    // app.get("/pokemon", fakerApiController.getPokemon)
    // app.get("/pokemon/:name", fakerApiController.getOnePokemon);
    // app.post("/pokemon", fakerApiController.createPokemon)
    // app.put("/pokemon/:name", fakerApiController.updatePokemon);
    // app.delete("/pokemon/:name", fakerApiController.deletePokemon);
}