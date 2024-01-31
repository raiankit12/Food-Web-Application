import React,{ createContext } from "react";

const UserContext=createContext({
    loggedInUser:"default",
    password:"1234"
    
})

export default UserContext;

