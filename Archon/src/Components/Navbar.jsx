import React from "react";

const Navbar = () => {
  return (
      <div className=" fixed top-7 left-1/2 transform -translate-x-1/2 z-50 bg-black text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-between gap-2 w-3xl"> 
     
      <div className="font-bold text-lg">
        Archon<span className=" text-xl ">+</span>
      </div>

      <div className="flex gap-4 text-sm font-medium items-center">
        <a className="hover:text-gray-300 cursor-pointer">Home</a>
        <a className="hover:text-gray-300 cursor-pointer">Project</a>
        <a className="hover:text-gray-300 cursor-pointer">About Us</a>
        <a className="hover:text-gray-300 cursor-pointer">Gallery</a>
        <a className="hover:text-gray-300 cursor-pointer">Blog</a>
        
      </div>

      <button className="bg-[#292929] text-white text-sm px-3 py-1 rounded-full flex items-center gap-2 hover:bg-gray-200 ">
            <span className="w-1.5 h-1.5 bg-white rounded-full" ></span>
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
