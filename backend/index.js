require('dotenv').config();
<<<<<<< HEAD
const express = require('express');
const DbConnect = require('./config/db');
=======
const Database = require("./config/db");

const PORT = process.env.PORT;
>>>>>>> 2e6af62566a6a7f44a18f261bf8148cb7f8e3eb2

const PORT = process.env.PORT;
const app = express();

//routes
const UserRoutes = require('./routes/user');

app.use(express.json());

<<<<<<< HEAD
app.use('/auth/', UserRoutes);
=======
Database();

Database().then(
    app.listen(PORT, () => {
        console.log(`connected to port ${PORT}`)
    })
)


>>>>>>> 2e6af62566a6a7f44a18f261bf8148cb7f8e3eb2

DbConnect().then(
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    })
  );
  