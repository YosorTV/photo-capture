import React from 'react';
// Components
import MovieList, { Work } from '../components/MovieList';
// Animations
import { pageAnimation, slider, sliderContainer } from '../animation';
import {motion} from 'framer-motion';
import styled from 'styled-components';

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
