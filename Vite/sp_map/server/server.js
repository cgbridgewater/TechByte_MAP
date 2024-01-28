const express = require("express");
const app =  express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const PORT = 8000;

require('dotenv').config(); // MUST be above routes!

app.use(cookieParser());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config.js');
require('./routes/user.routes')(app);

app.listen(PORT,() => {
    console.log(`Charging up the Swaggin Wagon on Port: ${PORT}!`)
});