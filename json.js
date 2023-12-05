const express = require("express")

const api = express()
const data = require("../database/fooddata.js")
const product = require("../foodCategory.json")

const anas = async()=>{
try {
   await data.create(product) 
   console.log("all fine")
} catch (error) {
    console.log("something is missing")
    
}
}

api.post("/catagory",async(req,res)=>{
    try {
  const want = await data.find({})
  res.send(want)
    } catch (error) {
     console.log("some problem has come")
     
    }
 })
module.exports = api