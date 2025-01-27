require('dotenv').config();
const express = require('express');
const DbConnect = require('./config/db');

const PORT = process.env.PORT;
const app = express();

//routes
const UserRoutes = require('./routes/user');

app.use(express.json());

app.use('/auth/', UserRoutes);

DbConnect().then(
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    })
  );
  