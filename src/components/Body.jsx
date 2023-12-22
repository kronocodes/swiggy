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
  // var data2=[];

  useEffect(() => {
    fetchRestaurant();
    // fetchRestaurantData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRestaurant = async () => {
    // if (true) {
      
      const data1 = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.655381&lng=73.761024&sortBy=RELAVANCE&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data1.json();
      const resData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // async function checkJsonData(jsonData) {
      //   while (i < jsonData?.data?.cards.length) {
      //     let checkData =
      //       json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
      //         ?.restaurants;

      //     if (checkData !== undefined) {
      //       return checkData;
      //     }

      //     i++;
      //   }
      // }

      setAllRestaurants(allRestaurants.concat(resData));
      console.log("All rest",allRestaurants);
    // }
    //  else {
    //   let FETCH_MORE_RESTAURANT_DATA_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.655381&lng=73.761024&offset=${offset}&sortBy=${sortBy}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
    //   const data = await fetch(FETCH_MORE_RESTAURANT_DATA_URL);
    //   const json = await data.json();
    // const data2=  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //   ?.restaurants;
    //   //setAllRestaurants((prev) => prev.concat(data2));
    //   console.log("Printing second data", data2);
    // }
  };
  // console.log("Printing second data",data2)

  // const fetchRestaurantData = async () => {
  // if (offset === 0) {
  //   const data = await fetch(
  //     `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.655381&lng=73.761024&sortBy=${sortBy}&page_type=DESKTOP_WEB_LISTING`
  //   );
  //   const jsonData = await data.json();
  //   const data2 = jsonData?.data?.cards?.find(
  //     (item) => item.cardType === "seeAllRestaurants"
  //   );
  //   const modifiedData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info
  //   setTotalOpenRestaurants(data2?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);
  //   setAllRestaurants(modifiedData);
  //   console.log(allRestaurants)
  // } else {
  //   //api call is diff on infinite scroll
  //   let FETCH_MORE_RESTAURANT_DATA_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.655381&lng=73.761024&offset=${offset}&sortBy=${sortBy}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
  //   const data = await fetch(FETCH_MORE_RESTAURANT_DATA_URL);
  //   const jsonData = await data.json();
  //   const data2 = jsonData?.data?.cards;
  //   const modifiedData = data2.map((card) => card.data);
  //   setAllRestaurants((prev) => prev.concat(modifiedData));
  // }
  // setLoading(false);
  // };

  // const handleScroll = async () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setLoading(true);
  //     setOffset(offset+ 20);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // function updateSortBy(val) {
  //   setAllRestaurants([]);
  //   setOffset(20);
  //   setSortBy(val);
  // }

  console.log("Printing from Body AllRes", allRestaurants);
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <>
    <Carousel/>
    <Shimmer numberOfCards={20} />
    </>
  ) : (
    <>
      <Carousel/>
      <div className="px-8 justify-between mt-4 2xl:m-16">
        <div className="flex justify-between h-12 items-center  border-b-2">
          <h1 className="font-bold text-lg">
            {allRestaurants.length} Restaurants
          </h1>
          <ul className=" hidden md:flex justify-between text-gray-500">
            <li
              className={`px-3 cursor-pointer ${
                sortBy === "RELEVANCE"
                  ? "text-black underline"
                  : "hover:text-black "
              }`}
              onClick={() => updateSortBy("RELEVANCE")}
            >
              Relevance
            </li>

            <li
              className={`px-3 cursor-pointer ${
                sortBy === "DELIVERY_TIME"
                  ? "text-black underline"
                  : "hover:text-black "
              }`}
              onClick={() => updateSortBy("DELIVERY_TIME")}
            >
              Delivery Time
            </li>
            <li
              className={`px-3 cursor-pointer ${
                sortBy === "RATING"
                  ? "text-black underline"
                  : "hover:text-black "
              }`}
              onClick={() => updateSortBy("RATING")}
            >
              Rating
            </li>
            <li
              className={`px-3 cursor-pointer ${
                sortBy === "COST_FOR_TWO"
                  ? "text-black underline"
                  : "hover:text-black "
              }`}
              onClick={() => updateSortBy("COST_FOR_TWO")}
            >
              Cost:Low to High
            </li>
            <li
              className={`px-3 cursor-pointer ${
                sortBy === "COST_FOR_TWO_H2L"
                  ? "text-black underline"
                  : "hover:text-black "
              }`}
              onClick={() => updateSortBy("COST_FOR_TWO_H2L")}
            >
              Cost:High to Low
            </li>
          </ul>
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
