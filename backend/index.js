const express = require('express');
require('dotenv').config();
const Database = require("./config/db");

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

Database();

Database().then(
    app.listen(PORT, () => {
        console.log(`connected to port ${PORT}`)
    })
)



