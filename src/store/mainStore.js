import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"

const mainStore = configureStore(
    {
        reducer: {
            movie: movieReducer
        }
    }
)

export default mainStore;