const express = require("express")
const cart = express()
const mongoose = require("mongoose")
const mycart = require("../database/mycart.js")
const model = require("../database/schema")
   
cart.post("/cart",async(req,res)=>{
   try {
    let data = req.body.orderdata
    let date = data.splice(0,0,{date:req.body.date})
   const anas = await new mycart({
    email:req.body.email,
    orderdata:[data],
    date:req.body.date
   })
   
   let abdul = await mycart.findOne({email:anas.email})
   if(abdul===null){
    anas.save()
    res.send("1st time data") 
   }
   else{
    await mycart.findOneAndUpdate({email:anas.email},
        {
            $push:{orderdata:data}
        })
        res.send("success")
   }

   } catch (error) {
    res.send('big error')
    
   }

})
cart.post('/OrderData', async (req, res) => {
    try {
        console.log(req.body.email)
        let eId = await mycart.findOne({ 'email': req.body.email })
        console.log(eId)
        res.json({orderData:eId})
    } catch (error) {
        res.send("Error",error.message)
    }
})



module.exports = cart
