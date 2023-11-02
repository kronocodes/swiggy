import React from "react";
import QuantityButton from "./QuantityButton";

const MenuItem = ({ data, restInfo }) => {
  return (
    <div className="max-w-[900px]">
      <div className="my-2 py-4 border-gray-600 flex justify-between">
        <div className="max-w-[900px]">
          <div className="flex items-center">
            {data.isVeg ? (
              <img
                className="w-6"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
              ></img>
            ) : (
              <img
                className="w-6"
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
              ></img>
            )}
          </div>
          <h1 className=" text-base font-bold text-gray-700">{data.name}</h1>
          {data.price ? (
            <div className="flex items-center text-sm text-gray-600">
              <h1>₹ {data.price / 100}</h1>
            </div>
          ) : (
            <div className="flex items-center text-sm font-semibold text-gray-800">
              <h1>₹ {data.defaultPrice / 100}</h1>
            </div>
          )}
          <h1 className="text-sm text-gray-400 mt-2 w-[660px]">{data.description}</h1>
        </div>
        <div className="flex flex-col items-center">
          {data.imageId && (
            <div className="">
              <img
                className="h-[120px] w-[140px] rounded-2xl border-gray-700 shadow-md object-cover"
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data.imageId}`}
                alt="img"
              ></img>
            </div>
          )}
          <QuantityButton data={data} restInfo={restInfo} />
        </div>
      </div>
      <div className="border-b-2"></div>
    </div>
  );
};

export default MenuItem;
