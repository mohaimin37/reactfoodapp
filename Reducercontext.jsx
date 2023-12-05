import React, { useReducer } from 'react'
//create context
import { createContext } from 'react'
const Appcontext = createContext()
const Dispatchcontext = createContext()

const reducer = (state,action)=>{
if(action.type==='add'){
    return [...state,{id:action.id,name:action.name,img:action.img,description:action.description,price:action.price,qty:action.qty,size:action.size}]
}
if(action.type ==="delete"){
    let arr = [...state]
    arr.splice(action.index,1)
    return arr

}
if(action.type==="drop"){
    let array =[]
    return array 
}
return state
}
const Appprovider = ({children})=>{
    const[state,dispatch] = useReducer(reducer,[])
return(
    <Dispatchcontext.Provider value={dispatch}>
        <Appcontext.Provider value={state} > {children} </Appcontext.Provider>
    </Dispatchcontext.Provider>
)
}
export  default  Appprovider 
export {Dispatchcontext,Appcontext}








