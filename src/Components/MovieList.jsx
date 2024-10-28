import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genereId, index_ }) => {
  const [moviesList, setMoviesList] = useState([]);
  const elementReference = useRef(null);
  const screenWidth = window.innerWidth;
  useEffect(() => {
    getMoviesByGenere();
  }, []);

  const getMoviesByGenere = async () => {
    const movies = await GlobalApi.getMovieByGenreId(genereId);
    setMoviesList(movies);
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 500;
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 500;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => sliderLeft(elementReference.current)}
        className={`text-[50px] text-white
        p-2 z-10 cursor-pointer 
        hidden md:block absolute
            ${index_ % 3 === 0 ? "mt-[70px]" : "mt-[150px]"}`}
      />

      <div
        ref={elementReference}
        className="flex overflow-x-auto gap-8
        scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {moviesList &&
          moviesList.map((item, index) => (
            <>
              {index_ % 3 === 0 ? (
                <HrMovieCard key={index} movie={item} />
              ) : (
                <MovieCard key={index} movie={item} />
              )}
            </>
          ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => sliderRight(elementReference.current)}
        className={`text-[50px] text-white hidden md:block
        p-2 cursor-pointer z-10 top-0
        absolute right-0 ${index_ % 3 === 0 ? "mt-[70px]" : "mt-[150px]"}
        `}
      />
    </div>
  );
};

export default MovieList;
