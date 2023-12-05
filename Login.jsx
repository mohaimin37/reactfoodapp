import React, { useState } from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import axios from "axios"




function Login() {
  const[password,setpassword] = useState()
  const[em,setem] = useState()
  const[r,setr] = useState()
  let navigate = useNavigate()


  const subs = (e)=>{
    e.preventDefault()
    axios.post("/login",{password:password,email:em}).then((res)=>{
      setr(JSON.stringify(res.data))
      if(res.data.auth){
        alert("you have loged in sucessfully")
        localStorage.setItem("authtoken",res.data.auth)
        localStorage.setItem("useremail",em)

        console.log(localStorage.getItem("authtoken"))
        navigate("/")
       }

      
    
     
         })
         
       
        


  }
 
 
 

  return (
   <>
   <form action="" onSubmit={subs} className='form1'>
   <h5>registered email</h5>
    <input type="text" placeholder='email...' value={em} onChange={(e)=>{
      setem(e.target.value)
    }} />
    <h5>registered password</h5>
    <input type="text" placeholder='password' value={password} onChange={(e)=>{
      setpassword(e.target.value)
    }} />
    <br />
    <button type='submit' className='bt'>Login</button>
    <p>doesn't registered yet  <NavLink to="/register" className="wow">Register</NavLink></p>

    <p className='po'>{r}</p>

   </form>

   </>
  )
}

export default Login
