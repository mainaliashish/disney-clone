import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <>
      <section className="hover:scale-110 transition-all duration-150 ease-in">
        <img
          className="w-[110px] md:w-[200px] cursor-pointer
            rounded-lg hover:border-[3px] border-gray-300 
            hover:scale-110 transition-all duration-150 ease-in-out"
          src={IMG_CDN_URL + movie.poster_path}
          alt="movie-card-image"
        />
        <h2
          className="w-[110px] md:w-[260px] text-white
    mt-2"
        >
          {movie?.title}
        </h2>
      </section>
    </>
  );
};

export default MovieCard;
