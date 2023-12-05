import React, { useState } from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import axios from "axios"

function Signup() {
  const[user,setuser] = useState("")
  const[pass,setpass] =useState("")
  const[cpass,setcpass] =useState("")
  const[email,setemail] =useState("")
  const[result,setresult]= useState("")
  let navigate = useNavigate()


  const sub = (e)=>{
    e.preventDefault()
    axios.post("/signup",{name:user,email:email,password:pass,cpassword:cpass}).then((res)=>{
      setresult(res.data)
      if(res.data == "data saved sucessfully please go to login page now"){
        alert("you are registered now ")
        navigate("/login")
      }
      
     

    })
    



  }

  return (
 <>
 <form action="" onSubmit={sub} className='form1'>
 <h5>user name</h5>
 <input type="text" placeholder='enter your name' value = {user}
  onChange={(e)=>{
  setuser(e.target.value)
 }}/>
 <h5>Email</h5>
 <input type="email" placeholder='enter your email' value={email}  onChange={(e)=>{
  setemail(e.target.value)
 }}/>
 <h5>Password</h5>
 <input type="text" placeholder=' password' value={pass}  onChange={(e)=>{
  setpass(e.target.value)
 }}/>
 <h5>Conform password</h5>
 <input type="text" placeholder='conform password' value={cpass} onChange={(e)=>{
  setcpass(e.target.value)
 }} />
 <br />
 <button type='submit' className='bt'> Register </button>

 <p >if already registered go to <NavLink to="/login" className="wow">login page</NavLink> </p>
 
<p className='pop'>{result}</p>
 </form>
 </>
  )
}

export default Signup
