import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer/Shimmer";
import ShimmerCard from "./Shimmer/ShimmerCard";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Carousel from "./Carousel";
import { configres } from "../utils/constants";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(configres);
  const [totalOpenRestaurants, setTotalOpenRestaurants] = useState();
  const [sortBy, setSortBy] = useState("RELEVANCE");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const isOnline = useOnline();

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
      
      const data1 = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        // `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.655381&lng=73.761024&sortBy=RELAVANCE&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data1.json();
      const resData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(allRestaurants.concat(resData));
      console.log("All rest",allRestaurants);

  };

  console.log("Printing from Body AllRes", allRestaurants);
  if (!allRestaurants) return null;

  return (
    <>
      <Carousel/>
      <div className="justify-between mt-2 max-w-[1600px] mx-auto">
        <div className="flex justify-between h-10 items-center  border-b-2">
          <h1 className="font-bold text-lg mx-5">
            {allRestaurants.length} Restaurants
          </h1>
        </div>
        <div className="flex flex-wrap justify-center ">
          {allRestaurants &&
            allRestaurants?.map((restaurant) => {
              return (
                <Link
                  className="flex md:w-1/3 lg:w-1/4 max-w-xs"
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <Card {...restaurant?.info} />
                </Link>
              );
            })}
          {/*loading && <ShimmerCard />*/}
        </div>
      </div>
    </>
  );
};

export default Body;
