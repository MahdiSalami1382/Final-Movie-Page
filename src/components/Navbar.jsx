import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent absolute top-0 w-full z-10">
      <div className="text-2xl font-bold text-purple-400">M</div>
      <ul className="flex gap-8 text-white font-medium">
        <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
        <li><Link to="/movies/avengers" className="hover:text-purple-400">Avengers</Link></li>
        <li><Link to="/movies/batman" className="hover:text-purple-400">Batman</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
