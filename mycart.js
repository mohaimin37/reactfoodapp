const mongoose = require("mongoose")
const schema  = new mongoose.Schema({
    email:String,
    orderdata:{
        type:Array
    },
    date:{
        type:Date,
    }
})
const mycart = new mongoose.model("mycart",schema)
module.exports = mycart