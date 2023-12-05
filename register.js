const express = require("express")
const register = express()
const model = require("../database/schema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
jwtsecret = "anasismynameandiamdoingcomputers"

register.post("/signup",async(req,res)=>{


    try {
        const salt =await bcrypt.genSalt(10)
        const pass = await bcrypt.hash(req.body.password,salt)
        const cpass = await bcrypt.hash(req.body.cpassword,salt)


       


        const abdul = await new model({
            name : req.body.name,
            email : req.body.email,
           password : pass,
            location : req.body.location,
            cpassword : cpass
        })
        
        
        
        const name = req.body.name
        const email = req.body.email
        var password = req.body.password
        const location = req.body.location
        const cpassword = req.body.cpassword
        console.log(password,cpassword)



        if(!password || !email || !password || !cpassword){
            return res.json("invalid signup credentials")
        }
        if(password!==cpassword){
            res.json("plz check your password again")
        }
        else{
            const email = req.body.email 
            const e = await model.findOne({email:email})
            const p =await model.findOne({password:password})
            if(p && e){
               res.json(" user is already there go to login page  ")
            }
            else{
                 res.status(200).json("data saved sucessfully please go to login page now")
              await abdul.save()
              console.log(email)
            }
            

        }
   
    } catch (error) {
        res.status(404).send("some error occured during registration")
        
    }
  
   

})
register.post("/login",async(req,res)=>{
    try {
        const arsh = await new model(req.body)
        const password = req.body.password
        const email = req.body.email
        if(!password || !email){
            res.json("invalid login credentials")
        }
        else{

        const email = req.body.email 
        console.log(password,email)
         const verifye = await model.findOne({email:email})
         console.log(verifye.password)


        const verifyp = await bcrypt.compare(password,verifye.password)
       

        if(verifyp && verifye){
            const authenticate = {
                data:{
                    id:verifye.id

                }

            }
            const auth = jwt.sign(authenticate,jwtsecret)
           res.json({success:true,auth:auth})

        }
        else{
            res.json("this data is not in our database you should  have to look up your login details or if you have not registered yet plz go to registration form ")
        }

    }





        
    } catch (error) {
        res.json("something is missing is login ")
    }

})
module.exports = register