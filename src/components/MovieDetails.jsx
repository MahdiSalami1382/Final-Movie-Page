import React from "react";

const MovieDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
      <div>
        <img
          src="/images/poster.jpg"
          alt="Avengers Poster"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4 text-gray-300">
        <h2 className="text-xl font-semibold text-white">Part of the journey is the end.</h2>
        <p className="leading-relaxed">
          After the devastating events of Avengers: Infinity War, the universe is in ruins due to
          the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must
          assemble once more in order to undo Thanos' actions and restore order to the universe once
          and for all, no matter what consequences may be in store.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">★</span>
          <span className="text-white font-medium">8.3</span>
        </div>
        <div className="space-y-2">
          <p><span className="text-gray-400">Type:</span> Movie</p>
          <p><span className="text-gray-400">Release Date:</span> 2019-04-24</p>
          <p><span className="text-gray-400">Run time:</span> 181 min</p>
          <p><span className="text-gray-400">Genres:</span> Adventure, Science Fiction, Action</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
