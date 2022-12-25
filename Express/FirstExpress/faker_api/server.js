const express = require("express");
const app = express();
const PORT = 8000;
const { response } = require("express");
const { faker } = require('@faker-js/faker');
const {  newUser, newCompany, test1, test2, test3 } = require("./data/fakerData");


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this sends the app function to the routes
require("./routes/fakerApi.routes")(app);

// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`));


// delete the garbage below once done!! #TakeOutTheTrash





















//send somewhere!!!!
// const createUser = () => {
//     const newUser = {
//         password: faker.internet.password(20, true, /[A-Z]/),
//         email: faker.internet.email(),
//         phoneNumber: faker.phone.number(),
//         lastName: faker.name.lastName(),
//         firstName: faker.name.firstName(),
//         id: faker.finance.account(5),
//     };
//     return newUser;
// };
// const newFakeUser = createUser();
// console.log(newFakeUser);

// const createCompany = () => {
//     const newFakeCompany = {
//         id: faker.finance.account(6),   
//         companyName: faker.company.name(),
//         address: [
//             faker.address.streetAddress(true),
//             faker.address.city(),
//             faker.address.state(),
//             faker.address.zipCodeByState(),
//             faker.address.country()
//         ]        
//     };
//     return newFakeCompany;
// };
// const newFakePlace = createCompany();
// console.log(newFakePlace);
//finish sending somewhere!!
