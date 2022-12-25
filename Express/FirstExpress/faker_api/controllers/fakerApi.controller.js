const { response } = require("express");


let testList = [test1, test2, test3];
let usersList = []
let companyList = []
let user_company = []


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
        usersList.push(newUser)
        res.json( newUser )
    },
    createCompany: (req,res) => {
        console.log(req);
        const newCompany = newCompanyObj;
        companyList.push(newCompany)
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
        user_company.push(userAndCompany)
        res.json(userAndCompany)
    },
    getUsersList: (req,res) => {
        console.log(req);
        res.json(usersList)
    },
    getCompaniesList: (req,res) => {
        console.log(req);
        res.json(companyList)
    },
    getUser_CompanyList: (req,res) => {
        console.log(req);
        res.json(user_company)
    }
};


//add CRUD as needed!!!!