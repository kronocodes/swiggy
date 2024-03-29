import React from "react";
import Appstore from "../assets/Appstore.svg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 p-8 ">
      <div className="">
        <div className="py-5 min-h-[300px] flex flex-wrap justify-between">
          <div className="w-1/2 flex flex-col">
            <div className="text-black text-2xl mb-14"> Foodle</div>
            <div className="flex h-12">
              <img className="" src={Appstore} alt="a" />
            </div>
          </div>
          <div className="w-1/2 flex flex-wrap">
            <ul className="pr-10 text-gray-700">
              <li className="py-1">Get Hel</li>
              <li className="py-1">Buy gift cards </li>
              <li className="py-1">Add your restaurant</li>
              <li className="py-1">Sign up to deliver</li>
              <li className="py-1">Create a business account</li>
              <li className="py-1">Promotions</li>
            </ul>
            <ul className="text-gray-700">
              <li className="py-1">Restaurants near me</li>
              <li className="py-1">View all cities</li>
              <li className="py-1">View all countries</li>
              <li className="py-1">Pickup near me</li>
              <li className="py-1">About Foodle</li>
              <li className="py-1">English</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 w-full h-20 flex items-center justify-between">
          <div className="text-black font-bold text-3xl">Foodle</div>
          <div className="text-black text-center md:block">© 2023 Foodle</div>
          <div className="flex justify-between">
            <a href="https://github.com/kronocodes/swiggy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-black m-2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/abhisheknandan2013/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-black m-2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
            </a>
            <a href="https://abhisheknandan.vercel.app/" className="mt-[7px] bg-black text-white rounded-full w-[33px] h-[34px] flex items-center justify-center">AN</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
