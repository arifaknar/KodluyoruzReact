import React, { useState } from 'react'

export default function UseStateArray() {
    const [cities,setCities]=useState(["arif","emir"])
    return (
       <>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#000",flexWrap:"wrap", }}><hr></hr>
            {
                cities.map((city,index)=>{
                    return <div  style={{margin:"0.5rem"}} key={index}>{city}</div>
                }
                )
            }
            <hr></hr>
            
        </div>
        
        <div style={{textAlign:"center"}}><button onClick={()=>{setCities([...cities,"aknar"])}}>Diziye Ekle</button></div>
       
       </>
    )
}
