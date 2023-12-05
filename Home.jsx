import Carausel from "./Carousel"
import Card from './Card'
import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import axios from "axios"


function Home() {
  const [search,setsearch] = useState()
  const[item,setitem] = useState([])
  const[catagory,setcatagory] = useState([])

  useEffect(()=>{
    axios.post("/item").then((res)=>{
      setitem(res.data)
    }).catch((err)=>{
      setitem("not write at all may be right ")
    },[])
    axios.post("/catagory").then((res)=>{
      setcatagory(res.data)
    }).catch((err)=>{
      console.log("not write at all ")
    },[])


  })
 
  return (
    <>
    <Carausel search = {search} setsearch = {setsearch}></Carausel>
    
    {
      catagory?catagory.map((elem)=>{
        return(<>

        <div key={elem._id}>
        {elem.CategoryName}
       <hr />
        </div>
  
        {
    catagory?item.filter((data)=>
   
    (data.CategoryName === elem.CategoryName ) && (data.name.toLowerCase().includes(search))
    ).map((elem)=>
    <span id={elem._id}>
   

    <Card 
    fooditem = {elem}
            options1 = {elem.options[0]}> </Card>
    </span>
   
    ):<>h2 i am fine</>
  }
           
        </>)
      }):<>h2</>
    }
    


  
 
  

    <Footer></Footer>
    </>
  )
}

export default Home
