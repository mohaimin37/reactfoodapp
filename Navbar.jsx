import {NavLink} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import { Appcontext } from "./Reducercontext"
import { useContext } from "react"

function Navbar() {
  let navigate = useNavigate()
  let usecart = useContext(Appcontext)
  
  const cli = ()=>{
    localStorage.removeItem("authtoken")
    navigate("/login")
  }
  return (
 <>
 <div className="navbar">
    <nav className="navbar navbar-expand-lg ">
  <NavLink className="navbar-brand" to="">Food-Bank</NavLink>


      <NavLink className="nav-item nav-link active home" to="/">Home <span className="sr-only"></span></NavLink>
      {
        localStorage.getItem("authtoken")?<>
        <NavLink className="nav-item nav-link active home myorders" to="/myorders">My Orders <span className="sr-only"></span></NavLink>
     
        </>:<></>
      }
      {
       !localStorage.getItem("authtoken")?<>

        <NavLink className="nav-item nav-link login" to="/login" >Login</NavLink>
      <NavLink className="nav-item nav-link register" to="/register">Register</NavLink>
        </>:<>
        <NavLink className="nav-item nav-link mycart" to="/mycart">MyCart {" "} {<><p className="length">{usecart.length}</p></>}
        </NavLink>
      <NavLink className="nav-item nav-link logout"  onClick={cli} >Logout</NavLink>
        </>
      }
 
    
</nav>
</div>
 </>
  )
}

export default Navbar
