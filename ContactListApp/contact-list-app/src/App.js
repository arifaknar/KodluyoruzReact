
import { useEffect, useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Form from './components/Contacts/Form';
import List from './components/Contacts/List';

function App() {
  const [contacts,setContacts]=useState([])
  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div className="App">
     <Contacts/>
     <List contacts={contacts}/>
     <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  );
}

export default App;
