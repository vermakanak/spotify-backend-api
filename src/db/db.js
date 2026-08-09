const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log("connected to DB")
    }catch(err){
        console.error("database connection error:", err)
    }
}
module.exports = connectDB;