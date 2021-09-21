import React, { useState } from 'react'
import './style.css'
export default function List({contacts}) {
    const[filterText,setFilterText]=useState("");

    const filteredContact=contacts.filter((item)=>{
        return Object.keys(item).some((key)=>{
            return item[key].toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase().trim())
        })
    })


    return (
        <div>
            <h1>CONTACTS</h1>
            <div><input placeholder="Filter Text" 
            value={filterText}
            onChange={(e)=>{setFilterText(e.target.value)}}
            /></div>
            <table style={{textAlign:"center",margin:"20px auto",color:"GrayText"}} width="200px">
                <tr style={{textDecoration:"underline"}}>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                </tr>
                { filteredContact.map((contact,index)=>(
                    
               <tr className="list-item" key={index} >
                    <td>{contact.fullName}</td>
                    <td>{contact.phoneNumber}</td>
                </tr>
                ))}
            </table>

            <hr/>
            <h5>Total Contact: {filteredContact.length}</h5>
               
        </div>
    )
}
