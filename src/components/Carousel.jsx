import React from "react";
import anim from "../assets/anim.jpg"

const Carousel = () => {
  return (
    <div className="md:mx-4">
    <div className="max-w-[1600px] mx-6 md:mx-auto rounded-xl h-40 pl-4 mt-1 bg-black">
      <div>
        <p className="text-white font-[600] text-[36px] ml-8 pt-7">Crave it? Get it.</p>
        <p className="text-white font-[200] text-[18px] ml-8 ">Search for a favorite restaurant, cuisine, or dish.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
