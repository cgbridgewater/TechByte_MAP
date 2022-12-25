

const fakerApiController = require("../controllers/fakerApi.controller");



module.exports = (app) => {
    app.get("/", fakerApiController.index);
    app.get("/tester", fakerApiController.tester);
    app.get("/api/users/new", fakerApiController.createUser);
    app.get("/api/companies/new", fakerApiController.createCompany);
    app.get("/api/user/company/new", fakerApiController.createUserAndCompany);
    app.get("/api/user/all", fakerApiController.getUsersList);
    app.get("/api/companies/all", fakerApiController.getCompaniesList);
    app.get("/api/user_companies/all", fakerApiController.getUser_CompanyList);
}