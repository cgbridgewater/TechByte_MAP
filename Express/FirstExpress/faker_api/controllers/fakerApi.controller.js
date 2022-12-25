const { response } = require("express");
// const { newCompany, newUser } = require("../data/fakerData");

let testList = [test1, test2, test3];

let usersList = []
let companyList = []


module.exports = {
    index: (req, res) => {
        // console.log(req);
        res.json({ message: "Welcome to Faker-API" });
    },
    tester: (req,res) => {
        console.log(req);
        res.json( testList )
    },
    createUser: (req,res) => {
        console.log(req);
        const newUser = newUserObj;
        res.json( newUser )
    },
    createCompany: (req,res) => {
        console.log(req);
        const newCompany = newCompanyObj;
        res.json( newCompany)
    },
    createUserAndCompany: (req,res) => {
        console.log(req);
        const newUser = newUserObj;
        const newCompany = newCompanyObj;
        const userAndCompany = {
            user: newUser,
            company: newCompany,
        };
        res.json(userAndCompany)
    },
};
    // createUser: (req,res) => {
    //     const newUser = {
    //         password: faker.internet.password(20, true, /[A-Z]/),
    //         email: faker.internet.email(),
    //         phoneNumber: faker.phone.number(),
    //         lastName: faker.name.lastName(),
    //         firstName: faker.name.firstName(),
    //         id: faker.finance.account(5),
    //     };
    //     const newFakeUser = createUser();
    //     console.log(newFakeUser);
    //     res.json({ message: "successfull created new company"})
    //     return newUser;

    // },
    // createCompany: (req,res) => {
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
    //     const newFakePlace = createCompany();
    //     console.log(newFakePlace);
    //     res.json({ message: "successfull created new company"})
    //     return newFakeCompany;

    // }



//add CRUD as needed!!!!