// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";
import { IMG_CDN_URL, HiChevronRight, HiChevronLeft } from "../utils/constants";


const Slider = () => {
  const movies = useSelector((store) => store.movie.topRatedMovies);
  const dispatch = useDispatch();
  const elementReference = useRef();
  const screenWidth = window.innerWidth
  useEffect(() => {
    topRatedMoviesList();
  }, []);

  const topRatedMoviesList = async () => {
    const getTopRatedMovies = await GlobalApi.topRatedMovies;
    dispatch(addTopRatedMovies(await getTopRatedMovies));
  };
  if (!movies) return;
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110
  }
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110
  }
  return (
    <div>
        <HiChevronLeft 
            onClick={() => sliderLeft(elementReference.current)}
            className="hidden md:block text-white text-[30px] absolute mx-8 mt-[270px] cursor-pointer"/>
        <HiChevronRight
            onClick={() => sliderRight(elementReference.current)}
            className="hidden md:block text-white text-[30px] absolute mx-8 mt-[270px] cursor-pointer right-0"/>
        <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth" ref={elementReference}>
        {movies &&
            movies.map((item, index) => (
            // console.log(IMG_CDN_URL + item.backdrop_path);
            <img
                src={IMG_CDN_URL + item.backdrop_path}
                alt="slider-image"
                className="min-w-full md:h-[510px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
                key={index}
            />
            ))}
        </div>
    </div>
  );
};

export default Slider;
