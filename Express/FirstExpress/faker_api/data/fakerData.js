const { faker } = require('@faker-js/faker');

newUserObj = {
    password: faker.internet.password(20, true, /[A-Z]/),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    id: faker.finance.account(5),
};


newCompanyObj = {
    id: faker.finance.account(6),   
    companyName: faker.company.name(),
    address: [
        faker.address.streetAddress(true),
        faker.address.city(),
        faker.address.state(),
        faker.address.zipCodeByState(),
        faker.address.country()
    ]     
};



test1 = {
    name: "chris",
    comment: "I am working!!!",
}

test2 = {
    name: "billy",
    comment: "YEE!!!",
}

test3 = {
    name: "bob",
    comment: "HAW!!!",
}










module.exports = { newUserObj, newCompanyObj, test1, test2, test3 }