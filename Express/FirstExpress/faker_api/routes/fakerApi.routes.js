

const fakerApiController = require("../controllers/fakerApi.controller");



module.exports = (app) => {
    app.get("/", fakerApiController.index);
    app.get("/tester", fakerApiController.tester);
    app.get("/api/users/new", fakerApiController.createUser);
    app.get("/api/companies/new", fakerApiController.createCompany);
    app.get("/api/user/company/new", fakerApiController.createUserAndCompany);
}