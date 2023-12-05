import React from 'react'
import { useContext } from 'react'
import { Appcontext ,Dispatchcontext} from "./Reducercontext"
import axios from 'axios'


function Mycart() {
  let usecart = useContext(Appcontext)
  let dispatch = useContext(Dispatchcontext)
  const checkout =async()=>{
  const useremail = localStorage.getItem("useremail")
  let curdate = new Date().toDateString()
   await axios.post("/cart",{ orderdata:usecart,
      email:useremail,date:curdate}).then((res)=>{
        console.log(res.data)
        if(res.data=="success"){
          alert("click ok for addtocart")
        dispatch({type:"drop"})
        
        }
      }
      )

  }
  
  let totalprice = usecart.reduce((total,food)=>total+food.price,0)

  return(
    <>
      {
        (usecart.length ==""?<><h1 className='hello'>this cart is empty !</h1></>:<> 
        <table className='table'>
          <tr className='tr'>
            <th className='th'>items</th>
            <th className='th'>NAME</th>
            <th className='th'>QUANTITY</th>
            <th className='th'>OPTION</th>
            <th className='th'>AMOUNT</th>

          </tr>
          {
            usecart.map((food,index)=>
              <tr>
                <th>{index+1}</th>
               <td >{food.name}</td>
               <td >{food.qty}</td>
               <td >{food.size}</td>
               <td>{food.price}</td>
               <td><button className='dlte' onClick={()=>{dispatch({type:"delete",index:index})}}> delete </button></td>


              </tr>

            )
          
          }
        </table>

          <div className='class'>
          <button className='checkout' onClick={checkout}>Check Out</button>

          <h1 className='total'>TOTAL PRICE : {totalprice}</h1>

          </div>
        </>)
      }
    </>
  )

}

export default Mycart

