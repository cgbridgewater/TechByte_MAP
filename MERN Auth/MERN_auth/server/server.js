const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cookieParser());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config.js');
require('./routes/user.routes')(app);
require('dotenv').config();

app.listen(PORT,() => {
    console.log(`Listening on Port: ${PORT}`)});