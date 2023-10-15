import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import profile from "../assets/profile.svg";
import hero from "../assets/herobanner.png";
import Carousellanding from "./Carousellanding";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"

const Landingpage = () => {
  const images = [image1,image2,image3,image4, image5];
  return (
    <>
      <div className="bg-white h-20 border-b sticky top-0 items-center">
        <div className="flex justify-between py-3">
          <div className="flex items-center ">
            <div className="mx-6 cursor-pointer">
              <RxHamburgerMenu size={25} />
            </div>
            <Link to="/">
              <div className="flex">
                <div className="w-full ml-2 font-[700] text-[30px]">Food</div>
                <div className="w-full text-[30px]">le</div>
              </div>
            </Link>
          </div>
          <ul className="items-center hidden md:flex md:mr-6">
            <li className="flex flex-col first-line:border bg-gray-100  text-sm py-2 pr-4 pl-3 ml-5 rounded-3xl ">
              <Link to="/landingpage">
                <div className="flex items-center">
                  <div>
                    <img className="w-4 mr-1" src={profile} alt="pro"></img>
                  </div>
                  <div>Log in</div>
                </div>
              </Link>
            </li>
            <li className="flex flex-col first-line:border bg-black text-white text-sm py-2 pr-4 pl-3 ml-3 rounded-3xl">
              <Link to="/landingpage">Sign up</Link>
            </li>
          </ul>
          <div className="fixed bottom-0 w-full font-bold flex justify-between bg-black text-white p-4 md:hidden"></div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col ml-10 my-20">
          <div>
            <p className="text-[44px] font-semibold">Late night at Hostel?</p>
            <p className="text-2xl text-gray-600">
              Order food from favourite restaurants near you.
            </p>
          </div>
          <div className="items-center mt-10 bg-gray-100 md:w-[40rem] flex ">
            <input
              type="text"
              placeholder="Search for your location"
              className="bg-gray-100 pl-4 px-4 py-3 md:w-[40rem]"
              //  value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="px-4 py-3 border-black bg-green-600 pl-5">
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
        <div className=""><Carousellanding images={images} /> </div>
      </div>
      <div>
        <img className="" src={hero}></img>
      </div>
    </>
  );
};

export default Landingpage;
