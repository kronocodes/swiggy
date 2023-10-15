import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="w-64 p-6 pl-8 h-full top-20 left-0 fixed bg-white border-r">
      <ul>
      </ul>
    </div>
  );
};
export default Sidebar;