const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    
        CategoryName:String,
        name: String,
        img: String,
        options: [
            {
                half: String ,
                full: String,
                regular: String,
                medium: String,
                large: String
            }
        ],
        description:String
    
})
const api = new mongoose.model("food2",schema)
module.exports = api