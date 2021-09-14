import React,{useState} from 'react'

export default function UseStateObject() {
    
    const [adress,setAdress]=useState({city:"İstanbul",street:"Ümraniye"})

    return (
        <div style={{textAlign:"center"}}><hr></hr>
            {
                <div>{adress.city+" "+adress.street}</div>
            }
            
            <hr></hr>
            {/* ...adress */}
                <button onClick={()=>{setAdress({street:"Ümraniye",city:"Mersin"})}}>Şehri  Güncelle</button>
            

        </div>
    )
}
