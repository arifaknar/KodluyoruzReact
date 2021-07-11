import React, { useState } from 'react'

export default function UsestateManager() {

    let [counter,setCounter]=useState(0)

    return (
          <div  style={{display:"flex",justifyContent:"center",alignItems:"center",color:"aqua"}}>
        <h1> arif : {counter} </h1> 
        <button onClick={()=>setCounter(counter+1)}  style={{margin:"20px"}}>Arttır</button>
        <button onClick={()=>setCounter(counter-1)}>Azalt</button>
      
        </div>
    )
}
