import { useEffect, useState } from 'react';
import "../../App.css"
import Form from '../Contacts/Form';
import List from '../Contacts/List';
import "../Contacts/style.css"
export default function Contacts() {
    const [contacts,setContacts]=useState([
        {
          fullName:"arif",
          phoneNumber:5485
        },
        {
          fullName:"emir",
          phoneNumber:5147
        },
        {
          fullName:"mehmet",
          phoneNumber:5864
        },
      ])
      useEffect(() => {
        console.log(contacts);
      }, [contacts])
    
    return (
        <div id="container">
            <List contacts={contacts}/>
            <Form addContacts={setContacts} contacts={contacts}/>
        </div>
    )
}
