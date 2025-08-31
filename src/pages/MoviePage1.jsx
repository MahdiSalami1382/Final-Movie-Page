import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieBanner from "../components/MovieBanner";
import MovieDetails from "../components/MovieDetails";

const MoviePage1 = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white px-6 md:px-20 py-6">
      <Navbar />
      <MovieBanner />
      <MovieDetails />
      <div className="mt-10">
        <Link to="/" className="text-purple-400 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default MoviePage1;
