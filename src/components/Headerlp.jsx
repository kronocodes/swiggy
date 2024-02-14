import React from 'react';
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import { toggleMenu } from '../utils/menuSlice';
import profile from "../assets/profile.svg"


const Headerlp = () => {

  return (
    <>
      <div className="bg-white h-20 border-b sticky top-0 items-center">
        <div className="flex justify-between py-3">
          <div className="flex items-center pl-5">
            <Link to="/">
              <div className="flex">
                <div className="w-full ml-2 font-[700] text-[30px]">Food</div>
                <div className="w-full text-[30px]">le</div>
              </div>
            </Link>
          </div>
          <ul className="items-center hidden md:flex md:mr-6">
            <li className="flex flex-col first-line:border bg-white  border  text-sm py-3 px-4 ml-5 rounded-3xl shadow-lg">
              <Link to="/landingpage/signin">
                <div className="flex items-center">
                  <div>
                    <img className="w-4 mr-1" src={profile} alt="pro"></img>
                  </div>
                  <p className='font-semibold text-base'>Log in</p>
                </div>
              </Link>
            </li>
            <li className="flex flex-col first-line:border bg-black text-white text-sm py-3 px-4 ml-3 rounded-3xl">
              <Link to="/landingpage/signup"><p className='font-semibold text-base'>Sign up</p></Link>
            </li>
          </ul>
          <div className="fixed bottom-0 w-full font-bold flex justify-between bg-black text-white p-4 md:hidden"></div>
        </div>
      </div>
    </>
  );
};

export default Headerlp;
