import { useContext, useEffect, useRef, useState } from "react"
import { Appcontext, Dispatchcontext } from "./Reducercontext"

  function Card(props) {
    let options = props.options1
    let priceoptions = Object.keys(options)
    const usecart = useContext(Appcontext)
    const dispatch = useContext(Dispatchcontext)
    const[qty,setqty] = useState(1)
    const[size,setsize] = useState("")
    const priceref = useRef()
  

    const addtocart = async()=>{
      await dispatch({type:"add",id:props.fooditem._id,name:props.fooditem.name,img:props.fooditem.img,description:props.fooditem.description,price:finalprice,qty:qty,size:size})
      console.log(usecart)
    }
    let finalprice =qty*(options[size])
    useEffect(()=>{
      setsize(priceref.current.value)
    },[])

  
  return (
   <>
   <div className="card">
  <img className="card-img-top" src= {props.fooditem.img} alt=""/>
  <div className="card-body">
    <h5 className="card-title">{props.fooditem.name}</h5>
    <p className="card-text">{props.fooditem.description}</p>
    <div className='opt'>
    <select name="" id="" className='slt1' onChange={(e)=>{
      setqty(e.target.value)
    }}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>

    </select>
    <select className='slt2' ref = {priceref} onChange={(e)=>{
      setsize(e.target.value)
    }}>
    {
  priceoptions.map((data)=>{
    return(
      <>
        <option key = {data} value = {data} >{data}</option>
      </>
    )
  })
}

    </select>

    <p> ₹/{finalprice} </p>
    </div>
    <div className="divcart">
    <button onClick={addtocart} className="addtocart">ADD TO CART</button>
</div>
  </div>
</div>

   </>
  )
}

export default Card
