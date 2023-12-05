const express = require("express")
const app = express()
const api = require("../database/fooddata2")
const product2 = require("../foodData2.json")

const arsh =async()=>{
    try {
        await api.create(product2)
        console.log("no mistake has been done")
    } catch (error) {
        console.log('big mistake has been done')
    }
    

}
app.post("/item",async(req,res)=>{
   try {
    const wants = await api.find({})
    res.send(wants)
    
   } catch (error) {
    console.log("some problem arise")
    
   }
})


module.exports = app