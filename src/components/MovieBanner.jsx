import React from "react";

const MovieBanner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
      <img
        src="../images/AvengersBanner.jpg"
        alt="Movie Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/50"></div>
      <div className="absolute bottom-6 left-6 bg-[#1e293b]/70 px-6 py-2 rounded-xl">
        <p className="text-sm text-gray-300">MovieHero / Movies</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">Avengers: Endgame</h1>
      </div>
    </div>
  );
};

export default MovieBanner;
