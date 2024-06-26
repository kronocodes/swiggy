import React from "react";
import { IMAGE_ID } from "../utils/constants";

const Card = (data) => {
  const {
    name,
    cloudinaryImageId,
    sla,
    costForTwo,
    avgRating,
    cuisines,
    aggregatedDiscountInfoV3,
  } = data;
  return (
    <div className="border rounded-lg border-gray-300  hover:shadow-2xl hover: p-2 m-2">
      <img className="h-[200px] w-[280px] object-cover" src={IMAGE_ID + cloudinaryImageId} alt="restaurant"></img>
      <h1 className="pt-2 font-bold">{name}</h1>
      <h2 className="pt-1 text-gray-500 text-sm">{cuisines?.join(", ")}</h2>
      <div className="py-2 flex justify-between items-center border-b-2 text-gray-500 text-sm md:text-xs">
        {avgRating && avgRating >= 4 ? (
          <div className="flex p-1 bg-green-700 text-xs text-white items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {avgRating}
          </div>
        ) : (
          <div className="flex p-1 bg-orange-500 text-xs text-white items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {avgRating}
          </div>
        )}
        <div>.</div>
        <h1>{sla?.deliveryTime}mins</h1>
        <div>.</div>
        <h1 className="xl:block">{costForTwo}</h1>
      </div>
      <h2 className="pt-1 text-amber-900 text-sm font-bold text-center">{aggregatedDiscountInfoV3?.header},{aggregatedDiscountInfoV3?.subHeader}</h2>
    </div>
  );
};

export default Card;
