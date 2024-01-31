import React,{ useState,useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";

export const Header=()=>
{
    // const btnlogin="login"

    const {loggedInUser}=useContext(UserContext);

   

    console.log("Header render");

    const [btnNameReact,setbtnReact]=useState("login")
   
    useEffect(()=>
    {
        console.log("useEffect called")
    },[btnNameReact])
     

    const OnlineStatus=useOnlineStatus();

    const statusIndicator = OnlineStatus === true ? "✅" : "🔴";

    return ( 
    <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
        <img className='w-40' src={LOGO_URL} />

        </div>
        <div className='flex items-center'>
         <ul className="flex p-4 m-4">
            <li className="px-4">OnlineStatus{statusIndicator}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/About">About Us</Link></li>
            <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="login"  onClick={()=>{ 
                //  btnNameReact="logout";

                // console.log(btnName);
                btnNameReact==='login' ? setbtnReact("logout"):setbtnReact("login");
            }}>{ btnNameReact}</button>
            <li className="px-4">{loggedInUser}</li>
         </ul>
        </div>
    </div>)
}

export default Header;