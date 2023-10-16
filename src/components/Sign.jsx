import React from "react";

export const SignIn = () => {
  return (
    <>
      <div className="w-[405px] mx-auto mt-20">
        <h1 className="text-2xl font-regular">
          What's your phone number or Email address?
        </h1>
        <div className="">
          <div>
            <input
              type="text"
              placeholder="Enter phone number or email"
              className="bg-gray-100 w-[405px] h-[30px] p-6 my-2 rounded-lg"
              //   value={searchText}
              //   onChange={(e) => setSearchText(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter password"
              className="bg-gray-100 w-[405px] h-[30px] p-6 my-2 rounded-lg"
              //   value={searchText}
              //   onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <br></br>
          <button className="w-[405px] h-[30px] py-6 flex items-center justify-center bg-black text-white rounded-lg">Sign In</button>

        </div>
        <br></br>
        <div className="w-[405px] h-[1px] bg-black"></div>
        <br></br>
        <div className="w-[410px] text-sm">
        By clicking on Sign in, I accept the Terms & Conditions & Privacy Policy
        </div>
      </div>
    </>
  );
};

export const SignUp = () => {
    return (
      <>
        <div className="w-[405px] mx-auto mt-20">
          <h1 className="text-2xl font-regular">
            Create account
          </h1>
          <br></br>
          <div className="">
            <div>
              <div className="flex justify-between">
                <input
                type="text"
                placeholder="Enter full name"
                className="bg-gray-100 w-[190px] h-[30px] p-6 my-2 rounded-lg"
                //   value={searchText}
                //   onChange={(e) => setSearchText(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter full name"
                className="bg-gray-100 w-[190px] h-[30px] p-6 my-2 rounded-lg"
                //   value={searchText}
                //   onChange={(e) => setSearchText(e.target.value)}
              />
              </div>
            
              <input
                type="text"
                placeholder="Enter phone number or email"
                className="bg-gray-100 w-[405px] h-[30px] p-6 my-2 rounded-lg"
                //   value={searchText}
                //   onChange={(e) => setSearchText(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter password"
                className="bg-gray-100 w-[405px] h-[30px] p-6 my-2 rounded-lg"
                //   value={searchText}
                //   onChange={(e) => setSearchText(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="bg-gray-100 w-[405px] h-[30px] p-6 my-2 rounded-lg"
                //   value={searchText}
                //   onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <br></br>
            <button className="w-[405px] h-[30px] py-6 flex items-center justify-center bg-black text-white rounded-lg">Sign up</button>
  
          </div>
          <br></br>
          <div className="w-[405px] h-[0.5px] bg-black"></div>
          <br></br>
          <div className="w-[410px] text-sm">
          By clicking on Sign up, I accept the Terms & Conditions & Privacy Policy.
          </div>
        </div>
      </>
    );
  };