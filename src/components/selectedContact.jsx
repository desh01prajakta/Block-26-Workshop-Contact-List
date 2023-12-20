import { useState } from "react";
import { useEffect } from "react";

//const [selectedContactId, setSelectedContactID] = useState

export default function selectedContact({selectedContactId}) { 
    const [contact, setContact] = useState();
     
    useEffect(()=>{
        async function fetchSelectedContactId(){
        try{
            const response = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
            setContact(result)
        }
        catch(error){
            console.log(error)
        }
    }
    fetchSelectedContactId()
},[])
console.log("Contact: ", contact)}
     