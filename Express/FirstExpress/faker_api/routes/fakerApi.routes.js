

const fakerApiController = require("../controllers/fakerApi.controller");



module.exports = (app) => {
    app.get("/", fakerApiController.index);
    app.get("/tester", fakerApiController.tester);
    
    // new entries
    app.get("/api/users/new", fakerApiController.createUser);
    app.get("/api/companies/new", fakerApiController.createCompany);
    app.get("/api/user/company/new", fakerApiController.createUserAndCompany);

    // get all's are an array being pushed to from above "new" entries
    app.get("/api/user/all", fakerApiController.getUsersList);
    app.get("/api/companies/all", fakerApiController.getCompaniesList);
    app.get("/api/user_companies/all", fakerApiController.getUser_CompanyList);
}