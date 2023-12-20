import { useState } from 'react'
import React from 'react';
import './App.css';
import ContactList from './components/contactList';
const [selectedContactId, setSelectedContactId] = state(null);

export default function App() {
  
  return (
    <>
      <ContactList />
    </>
  );
}



