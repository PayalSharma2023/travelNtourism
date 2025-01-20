const mongoose = require('mongoose');

const Database = async () => {
    try{
        const connection = await mongoose.connect(process.env.DB_URI);
        if(connection){
            console.log('successfully connected to database');
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = Database;