import axios from "axios";
import config from "../utils/config.json";

const moviesOptions = (url) => ({
  method: "GET",
  url: url,
  params: { page: "1" },
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + config.api.api_key,
  },
});

const topRatedMovies = axios
  .request(moviesOptions(config.movies_url.top_rated_movies_url))
  .then((res) => res?.data?.results)
  .catch((err) => err);

const popularMovies = axios
  .request(moviesOptions(config.movies_url.popular_movies_url))
  .then((res) => res?.data?.results)
  .catch((err) => err);

const getNowPlayingMovies = axios
  .request(moviesOptions(config.movies_url.now_playing_movies_url))
  .then((res) => res?.data?.results)
  .catch((err) => err);

export default { topRatedMovies, popularMovies, getNowPlayingMovies };
