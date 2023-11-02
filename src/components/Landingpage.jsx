import React from "react";
import Carousellanding from "./Carousellanding";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

const Landingpage = () => {
  const images = [image1, image2, image3, image4, image5];
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Jaipur", "Agra", "Goa", "Kochi", "Ahmedabad", "Varanasi", "Amritsar", "Mysore","Lucknow", "Chandigarh", "Noida", "Gurgaon", "Indore", "Bhopal", "Surat", "Vadodara", "Nagpur", "Coimbatore", "Visakhapatnam", "Trivandrum", "Bhubaneswar", "Ranchi", "Guwahati"];
  return (
    <>
      <div className="flex w-[100vw]">
        <div className="flex w-[50vw] flex-col mx-20 my-20">
          <div>
            <p className="text-[44px] font-semibold">Late night at Hostel?</p>
            <p className="text-2xl text-gray-600">
              Order food from favourite restaurants near you.
            </p>
          </div>
          <div className="items-center mt-10 bg-gray-100 md:w-[40rem] flex ">
            <input
              type="text"
              id="city"
              list="cities"
              placeholder="Search for your location"
              className="bg-gray-100 p-3 w-[35rem]"
              //  value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <datalist className="" id="cities">
              {cities.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
            <button className="px-4 py-3 border-black bg-yellow-400 pl-5">
              Search
            </button>
          </div>
          <div className="mt-6">
            <p className="text-gray-400">POPULAR CITIES IN INDIA</p>
            <ul className="flex pt-2">
              <li>Bangalore</li>
              <li className="pl-2">Delhi</li>
              <li className="pl-2">Kolkata</li>
              <li className="pl-2">Pune</li>
              <li className="pl-2">Mumbai</li>
              <li className="pl-2">& many more.</li>
            </ul>
          </div>
        </div>
        <div className="ml-30 min-w-[50vw] ">
          <Carousellanding images={images} />{" "}
        </div>
      </div>
      <div className="border flex justify-between">
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">Lightning-Fast Delivery</p>
          <p className="text-sm text-center">
            Experience Foodl's superfast delivery for food delivered fresh & on
            time
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div id="logo2"></div>
          <p className="text-lg font-semibold">Live Order Tracking</p>
          <p className="text-sm text-center">
            Know where your order is at all times, from the restaurant to your
            doorstep
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div id="logo3"></div>
          <p className="text-lg font-semibold">No Minimum Order</p>
          <p className="text-sm text-center">
            Order in for yourself or for the group, with no restrictions on
            order value
          </p>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
