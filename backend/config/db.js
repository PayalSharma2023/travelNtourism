const mongoose = require('mongoose');

<<<<<<< HEAD
const DbConnect = async()=>{
    try{
        const connect = await mongoose.connect(process.env.Db_URI);
        console.log(
            `Database connected: ${connect.connection.host},${connect.connection.name} `
        )
    } catch (err) {
        console.log(err)
    }
    
}

module.exports = DbConnect;
=======
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
>>>>>>> 2e6af62566a6a7f44a18f261bf8148cb7f8e3eb2
