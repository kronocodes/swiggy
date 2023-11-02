import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import { toggleMenu } from '../utils/menuSlice';
import profile from "../assets/profile.svg"
import cart from "../assets/cart.svg"


const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const cartItems = useSelector((store) => store.cart.items);
  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="bg-white h-20 border-b shadow-md sticky top-0 items-center" >
        <div className="flex justify-between py-3">
          <div className="flex items-center ">
            <div className='mx-6 cursor-pointer' onClick={() => toggleMenuHandler()}><RxHamburgerMenu size={25} /></div>
            <Link to="/">
              <div className='flex'>
                <div className="w-full ml-2 font-[700] text-[30px]">Food</div>
                <div className="w-full text-[30px]">le</div>
              </div>
            </Link>
          </div>
          <ul className="items-center hidden md:flex md:mr-6">
            <li className=" bg-gray-100 text-sm py-2 px-3 rounded-3xl font-semibold">
              <Link to="/search">Search</Link>
            </li>
            <li className=" bg-gray-100 text-sm py-2 px-4 ml-1 rounded-3xl font-semibold">
              <Link to="/profile">Profile</Link>
            </li>
            <li className=" bg-black text-white text-sm py-2 px-4 ml-1 rounded-3xl">
              <Link to="/cart">
                <div className='flex items-center'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
                  </div>
                    <div className='pl-1 font-semibold'>Cart-{count}</div>
                  </div>
              </Link>
            </li>
            <li className="flex flex-col first-line:border bg-gray-100  text-sm py-2 pr-4 pl-3 ml-5 rounded-3xl ">
              <Link to="/landingpage/signin">
                <div className='flex items-center'>
                  <div>
                    <img className='w-4 mr-1' src={profile} alt="pro"></img>
                  </div>
                  <div className='font-semibold'>Log in</div>
                </div>
              </Link>
            </li>
            <li className="flex flex-col first-line:border bg-gray-100  text-sm font-semibold py-2 pr-4 pl-3 ml-3 rounded-3xl">
              <Link to="/landingpage/signup">Sign up</Link>
            </li>
          </ul>
          <div className="fixed bottom-0 w-full font-bold flex justify-between bg-black text-white p-4 md:hidden">
            <Link to="/search">Search</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/cart"><img src='svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiB2aWV3Qm94PSIwIDAgMTYgMTYiIGNsYXNzPSJlaCBkcSBjeCBjeSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ.svg'></img>Cart- {count}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
