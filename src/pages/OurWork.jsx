import React from 'react';
// Components
import MovieList, { Work } from '../components/MovieList';
// Animations
import { pageAnimation } from '../animation';

const OurWork = ({ movies }) => {
  return (
    <Work 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show" 
      exit="exit">
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
