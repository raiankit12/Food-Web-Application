import RestaurantCard, { WithPromotedLebel } from "./RestaurantCard";

import { useContext, useEffect, useState } from "react";
import Shimar from "./Shimar";
import { Link } from "react-router-dom";

import { swiggy_api_URL, swiggy_api_URL1 } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";

const Body = () => {
  console.log("body render");

  const [ListOfRestaurants, setListofReastaurents] = useState(null);

  const [textSearch, settextSearch] = useState(" ");

  const [filteredRestro, setfilteredRestro] = useState([]);

  const RestroCardPromoted = WithPromotedLebel(RestaurantCard);
  const {loggedInUser,setUsername}=useContext(UserContext)

  console.log(ListOfRestaurants);

  useEffect(() => {
    // console.log("hello callback called useeffect")

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      // console.log(data);
      if (!data.ok) {
        throw new Error("data not fetched...");
      }
      const json = await data.json();

      // console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)

      // console.log(json?.data?.cards[1]?.card?.card);

      setListofReastaurents(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestro(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      // setListofReastaurents(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      // setfilteredRestro(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    } catch (Error) {
      console.log("error", Error.message);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like your internet is not working...</h1>;
  }

  return ListOfRestaurants && ListOfRestaurants.length === 0 ? (
    <Shimar />
  ) : (
    <div className="body">
      <div className="filter ">
        <div className="m-4 p-2">
          <div className="flex">
          <input
            type="text"
            className="w-40 h-10 my-6 border border-solid border-block rounded-2xl"
            value={textSearch}
            onChange={(e) => {
              settextSearch(e.target.value);
            }}
          />
          <button
            className="px-4 h-10 my-6 py-2 bg-green-100 mx-4 rounded-2xl"
            onClick={() => {
              console.log(textSearch);
              const filteredRestro = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(textSearch.toLowerCase())
              );

              setfilteredRestro(filteredRestro);

              //  console.log("filter )
            }}
          >
            Search
          </button>

          <button
            className="filter-btn px-4 py-2 bg-red-200 m-6 rounded-lg"
            onClick={() => {
              const FilteredValue = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );

              setfilteredRestro(FilteredValue);
              // console.log("clicked")
            }}
          >
            Top rated Restaurants
          </button>
          <div />
          <div classname="mx-8">
          <label>Username:</label>
            <input className="px-4 h-10 my-6 py-2  shadow-md border bg-white-200 mx-4 rounded-2xl" value={loggedInUser} onChange={(e)=>
              setUsername(e.target.value)}
            />
            
          </div>
        </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRestro &&
            filteredRestro.map((rest) => (
              <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}>
                {rest.info.promoted ? (
                  <RestroCardPromoted resData={rest} />
                ) : (
                  <RestaurantCard resData={rest} />
                )}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
