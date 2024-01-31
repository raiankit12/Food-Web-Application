import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

    // const [showItems,setshowItems]= useState(false);
   
    const handleClick=()=>{
        // setshowItems(!showItems);
        // showItems();
        setShowIndex();
    }
    return (
        <div>
        <div className="bg-gray-50 shadow-lg p-4 w-6/12 mx-auto my-4  ">
        <div className="justify-between flex cursor-pointer" onClick={handleClick} >
           <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})</span>
           <span>🔽</span>
           </div>
          {/* { console.log(data.itemCards)} */}
           { showItems && <ItemList item={data.itemCards} />}
        </div>
       
        </div>
    )

}

export default RestaurantCategory;