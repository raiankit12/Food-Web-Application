import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{

const [resinfo,setResinfo]=useState(null);

useEffect(()=>{

    fetchData();
},[])

   



fetchData= async ()=>{


   const data= await fetch(MENU_API + resId);
   const json= await data.json();
    setResinfo(json.data);
}

return resinfo;

}
export default useRestaurantMenu ;