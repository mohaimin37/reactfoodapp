const express = require("express")
const router = express()
const model = require("../database/schema")

router.post("/postdata",async(req,res)=>{
    try {
        const anas =await new model(req.body)
        if(!anas.name){
            res.status(400).json(`some data is missing`)
        }
        else{
            console.log(anas)
            res.status(200).json("we got the data ")
            await anas.save()
        }
    } catch (error) {
        res.status(404).json("post error")
        
    }
  


})
router.get("/getdata",async(req,res)=>{
try {
    const anas = await model.find({})
    if(!anas){
        res.status(400).json("no data is presend here")
    }
    else{
        res.status(200).json(anas)
    }
    
} catch (error) {
    res.json("get error")
    
}
    
})
router.get("/getdata/:id",async(req,res)=>{
    const _id = req.params.id
    try {
        const anas = await model.findById(_id)
        if(!anas){
            res.status(400).json('this data is not present here')

        }
        else{
            res.status(200).json(anas)
            console.log(anas)
        }
    } catch (error) {
        res.send("error occured during getting data by id "+error)

        
    }
})
router.delete("/deletedata/:id",async(req,res)=>{
    const _id = req.params.id
    try {
        if(_id){
            const anas = await model.findByIdAndDelete(_id,req.body)
            res.status(200).json(" this data hass been deleted"+anas)
            

        }
        else{
            res.status(200).json("the given data is not found")
           
        }
    } catch (error) {
        res.send("error occured during deleting data by id plz check your id  "+error)

        
    }
})

router.put("/putdata/:id",async(req,res)=>{
    const _id = req.params.id
    try {
        if(_id){
            const anas = await model.findByIdAndUpdate(_id,req.body)
            res.status(200).json("your data has been updated  plz check it in database")
            

        }
        else{
            res.status(200).json("the given data is not found")
           
        }
    } catch (error) {
        res.send("error occured during updating data by id plz check your id  "+error)

        
    }
})
module.exports = router