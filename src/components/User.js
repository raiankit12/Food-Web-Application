import React, { useEffect } from "react";

const User = (props) => {
 
  const { name, location } = props;

  useEffect(() => {
    
    console.log("useEffect called..")

    // setInterval(()=>{
    //     console.log("useEffect is about to return some value..")
    // },1000)
    return () => {
    console.log("useEffect return")
    };

  }, []); 

  return (
    <div className="user-card">
      <h2>Name: {name} function</h2>
      <h3>Location: {location}</h3>
      <h2>Contact: @ankit789101A</h2>
    </div>
  );
};

export default User;
