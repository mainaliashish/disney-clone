import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
        trailerVideo: null,
        moviesByGenere: null,
        actionMovies: null,
        adventureMovies: null,
        comedyMovies: null,
        animationMovies: null,
        crimeMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addMoviesByGenere: (state, action) => {
            state.moviesByGenere = action.payload
        },
        addActionMovies: (state, action) => {
            state.actionMovies = action.payload
        },
        addAdventureMovies: (state, action) => {
            state.adventureMovies = action.payload
        },
        addComedyMovies: (state, action) => {
            state.comedyMovies = action.payload
        },
        addAnimationMovies: (state, action) => {
            state.animationMovies = action.payload
        },
        addCrimeMovies: (state, action) => {
            state.crimeMovies = action.payload
        },
    }
})

export const { 
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies, 
    addTrendingMovies,
    addMoviesByGenere,
    addActionMovies,
    addComedyMovies,
    addAdventureMovies,
    addCrimeMovies,
    addAnimationMovies,
    addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;