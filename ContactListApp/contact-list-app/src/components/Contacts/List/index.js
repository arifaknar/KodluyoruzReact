import React from 'react'

export default function List({contacts}) {
    return (
        <div>
            <table style={{textAlign:"center",margin:"20px auto"}} width="200px">
                <tr>
                    <th>Name:</th>
                    <th>Tel</th>
                </tr>
                { contacts.map((contact)=>{
                    
                return <tr >
                    <td>{contact.fullName}</td>
                    <td>{contact.phoneNumber}</td>
                </tr>
            })}
            </table>
               
        </div>
    )
}
