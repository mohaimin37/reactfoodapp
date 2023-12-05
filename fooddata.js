const mongoose = require ("mongoose")

const schema = new mongoose.Schema({
    CategoryName: String,
    })
    const data = new mongoose.model("foods", schema)
    module.exports = data