import { useState } from 'react';
//import React from 'react';
import './App.css';
import ContactList from './components/contactList';
import selectedContact from './components/selectedContact';


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  //if(selectedContactId = (null) => render ContactList) 
  return (
    <>
    {selectedContactId ?(
      <div>Selected Contact View</div>
    ):(
      <ContactList />
      )}
    </>
  );
}



