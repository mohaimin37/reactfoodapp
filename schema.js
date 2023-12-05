const mongoose = require ("mongoose")


const schema = new mongoose.Schema({
location:String,
email:String,
name:String,
password:String,
cpassword:String,





})
const model = new mongoose.model("fooditem", schema)
module.exports = model