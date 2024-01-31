import Shimar from "./Shimar";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);
  const resinfo = useRestaurantMenu(resId);

  if (resinfo === null) return <Shimar />;

  const { name, cuisines, costForTwo } = resinfo?.cards[0]?.card?.card?.info;

  // console.log("card is:",resinfo?.cards);

  const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  console.log(
    "card des",
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold mx-6 text-lg">
        {cuisines.join(",")} -Rs {costForTwo / 100}{" "}
      </p>
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
          
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
