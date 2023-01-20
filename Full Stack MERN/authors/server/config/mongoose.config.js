const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/author", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database, lets Get Jiggy With It!"))
    .catch(err => console.log("Uh Oh, Something went wrong when connecting to the database",err))