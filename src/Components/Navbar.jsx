import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-700 text-white flex justify-between items-center px-8">
      <Link to="/" className="text-xl font-bold">
        Task Board
      </Link>
      <Link to='/deleted' className="text-xl font-bold">Deleted tasks</Link>
    </div>
  );
};

export default Navbar;
