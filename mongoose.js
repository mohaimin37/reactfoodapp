const mongoose = require("mongoose")
    mongoose.connect("mongodb://127.0.0.1:27017/fooddata").then(()=>{
    console.log("your database base has been connected")
}).catch((err)=>{
    console.log("database has not been connected yet ")

})



