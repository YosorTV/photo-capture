import React from 'react';
// Components
import MovieList, { Work } from '../components/MovieList';

const OurWork = ({ movies }) => {
  return (
    <Work>
      {movies.map(({ url, id, title, mainImg }) => 
        <MovieList 
          key={id}
          movieName={title}
          movieImg={mainImg}
          url={url}
        />
      )}
    </Work>
  )
}


export default OurWork
