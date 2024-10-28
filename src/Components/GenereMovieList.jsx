// eslint-disable-next-line no-unused-vars
import React from 'react'
import { GENERE } from "../utils/constants"
import MovieList from './MovieList';

const GenereMovieList = () => {
  return (
    <div>
        {   
            GENERE.map((item, index) => index <= 4 && (
                <div key={index} className='p-8 px-8 md:px-16'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MovieList genereId={item.id} index_={index}/>
                </div>
            ))
        }
    </div>
  )
}

export default GenereMovieList;
