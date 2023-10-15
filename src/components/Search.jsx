import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchResults } from "../utils/searchSlice";
import search from "../assets/search.jpeg"
import SearchIcon from "../assets/Search.svg"

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestedRestaurants, setSuggestedRestaurants] = useState();
  const dispatch = useDispatch();

  const searchResult = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchResult[searchText]) {
        setSuggestedRestaurants(searchResult[searchText]);
      } else {
        searchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const searchSuggestions = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.655381&lng=73.761024&str=${searchText}&trackingId=null`
    );
    const data2 = await data.json();

    if (data2.statusCode === 0) {
      setSuggestedRestaurants(data2.data.suggestions);

      dispatch(searchResults({ [searchText]: data2.data.suggestions }));
    } else {
      setSuggestedRestaurants();
    }
  };

  const handleClick = (data) => {
    console.log(data, "handleClick");
  }
  return (
    <div className="grid grid-cols-6 justify-items-center">
      <div className="col-start-2 col-span-4 mt-5">
        <div className="rounded-l-3xl rounded-r-3xl px-4 py-3 items-center bg-gray-100 md:w-[40rem] flex">
{/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 fill-slate-700" aria-hidden="true" focusable="false" viewBox="0 0 20 20" class="og jz cc cd"><path d="M18.834 17l-3.666-3.667c.916-1.333 1.5-2.916 1.5-4.666C16.667 4.333 13.083.75 8.75.75 4.417.75.834 4.333.834 8.667c0 4.333 3.583 7.916 7.917 7.916 1.75 0 3.333-.583 4.666-1.5l3.667 3.667 1.75-1.75zm-15.5-8.25c0-3 2.417-5.417 5.417-5.417s5.416 2.417 5.416 5.417-2.416 5.417-5.416 5.417c-3 0-5.417-2.417-5.417-5.417z" /></svg>
*/}
          <img className="h-4 w-4 ml-1 fill-slate-700" src={SearchIcon} alt="icon"/>
          <input
          type="text"
          placeholder="Search for restaurants, dish & cuisines"
          className="bg-gray-100 pl-4 md:w-[40rem]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="border-l border-gray-300 pl-2">
          Search
          </button>
        </div>
      </div>
      {suggestedRestaurants ? (
        <div className="col-start-2 col-span-4 md:w-[45rem]">
          {suggestedRestaurants.map((index) => (
            <div className="border-b border-gray-400 p-5 flex my-5 hover:scale-105 hover:bg-gray-100" onClick={() => handleClick(index)} key={index.text}>
              <div>
                <img
                  className="w-16 rounded-md hover:scale-110"
                  alt="food"
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${index.cloudinaryId}`}
                ></img>
              </div>
              <div className="self-center ml-5">
                <h1>{index.text}</h1>
                <h1>{index.type}</h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="col-start-2 col-span-4 inline-flex mt-5">
          <img className="p-20" src={search} alt="try searching something"></img>
        </div>
      )}
    </div>
  );
};

export default Search;
