import React,{ useContext } from "react";
import { CDN_URL, LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContex";

const RestaurantCard=(props)=>
{

   
    const {resData}=props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla:{deliveryTime}
    }= resData?.info;

    const { loggedInUser}=useContext(UserContext);
    // const {
       
    //     sla.deliveryTime
    //   }= resData?.info;
    // const {
    //   deliveryTime,
      
    // }= resData['info'] ['sla'];

    // const {
    //   cloudinaryImageId = '',
    //   name = '',              
    //   cuisines = [],          
    //   avgRating = 0 ,         
    // } = resData || {}
  
    return(
        <div 
        className="m-4 p-4 w-[300px] rounded-lg bg-gray-50 hover:bg-gray-400 sm:bg-green-50 lg:bg-red-50" 
         >
            
            <img className="res-logo rounded-lg" alt="logo" src={CDN_URL+ cloudinaryImageId } />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    )
} 

export const WithPromotedLebel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div >
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}  />
            </div>
        )
    }
}

export default RestaurantCard;