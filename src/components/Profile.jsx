import React from "react";
import ProfilePic from "../assets/Photu.jpeg";
const Profile = () => {
  const skills = [
    "React",
    "Redux",
    "Javascript",
    "C++",
    "Tailwindcss",
    "HTML 5",
    "CSS 3",
  ];
  return (
    <>
      <div className="grid grid-cols-6">
        <div class="h-32 pl-5 lg:h-52 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-800 col-span-4 col-start-2 border-gray-400 rounded-md">
          <img
            src={ProfilePic}
            alt="Abhishek Nandan"
            className="mt-16 rounded-full border-white border-[6px] w-[140px] lg:w-48"
          />
        </div>
      </div>
      <div className="grid grid-cols-6 mt-16 lg:mt-16">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2">
          <h1 className="text-2xl font-extrabold">Abhishek Nandan</h1>
          <h1>
            22 | CSE UG | Design | Game Dev | UI/UX | Front end | Leetcode
                      </h1>
                      <div>
                      <h1 className="text-gray-500 mt-2">Delhi,India</h1>
                           <p>Contact info</p>
                      </div>
        </div>
      </div>
            <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2">
          <h1 className="text-2xl font-extrabold my-4">Skills</h1>
          <div className="flex flex-wrap">
            {skills.map((skill) => (
              <h1
                key={skill}
                className="bg-cyan-600 text-white rounded-2xl w-fit px-2 m-2"
              >
                {skill}
              </h1>
            ))}
          </div>
        </div>
            </div>
            {/*
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2">
          <h1 className="text-2xl font-extrabold my-4">About</h1>
          <ul>
            <li className="m-1 p-1">
              1.
            </li>

            <li className="m-1 p-1">
              2.
            </li>

            <li className="m-1 p-1">
              3.
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2">
          <h1 className="text-2xl font-extrabold my-4">Experience</h1>
          <div className="p-4">
            <h1 className="text-lg font-extrabold text-gray-900">

            </h1>
            <h1 className="text-sm font-semibold text-gray-900">

            </h1>
            <h1 className="text-gray-500 text-sm"></h1>
            <h1 className="text-gray-500 text-sm"></h1>
          </div>
          <div className="p-4">
            <h1 className="text-lg font-extrabold text-gray-900"></h1>
            <h1 className="text-sm font-semibold text-gray-900">

            </h1>
            <h1 className="text-gray-500 text-sm"></h1>
            <h1 className="text-gray-500 text-sm"></h1>
          </div>
        </div>
      </div>
            */}
      <div className="grid grid-cols-6">
        <div className="col-start-2 col-span-4 p-4 pt-0 border-b-2 mb-12 md:mb-2">
          <h1 className="text-2xl font-extrabold my-4"> Connect </h1>
          <div className="inline-flex">
               <a href="https://www.linkedin.com/in/abhishek-nandan-b98337192/" className="pl-2"> <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="linkedin" /></a>
          </div>
          <div className="inline-flex">
               <a href="https://github.com/kronocodes" className="pl-2"><img className="w-8" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="linkedin" /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
