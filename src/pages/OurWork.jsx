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
    <motion.div variants={sliderContainer}>
      <Frame4 variants={slider}></Frame4>
      <Frame3 variants={slider}></Frame3>
      <Frame2 variants={slider}></Frame2>
      <Frame1 variants={slider}></Frame1>
    </motion.div>
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
// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left:0;
  top: 10%;
  height:100vh;
  width:100%;
  background: #1b1b1b;
  z-index:30;
`
const Frame2 = styled(Frame1)`
  background: #2f2f2f;
`
const Frame3 = styled(Frame1)`
  background: #777777;
`
const Frame4 = styled(Frame1)`
  background: #c3c3c3;
`

export default OurWork
