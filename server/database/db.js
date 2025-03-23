const mongoseDB = require("mongoose");

const connectDB = async () =>{
    try {
        const url = process.env.MONGO_URL;
        const conn = await mongoseDB.connect(url);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database Connection Fieled!' , error.message)
    }
}

module.exports = connectDB;