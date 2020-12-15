import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Animations
import { motion } from 'framer-motion';
import { photoAnim, fade, lineAnim } from '../animation';
import { useScroll } from './useScroll';

const MovieList = ({ url, movieName, movieImg }) => {
  const [element, controls] = useScroll();
  return (
    <Hide>
    <Movie ref={element} animate={controls} initial="hidden">
      <Link to={`${url}`}>
        <motion.h2 variants={fade}>{movieName}</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
      <Hide>
          <motion.img variants={photoAnim} src={movieImg} alt="img"/>
      </Hide>
      </Link>
  </Movie>
  </Hide>
  )
}
// style's
export const Work = styled(motion.div)`
  min-height: 100vh;
  overflow:hidden;
  padding: 2.5rem 5rem;
    h2{
      padding: 1rem 0rem;
    }
`
const Movie = styled(motion.div)`
  padding-bottom: 2.5rem;
  a{
    color:#fff;
    text-transform: capitalize;
    font-family: 'Josefin Sans', sans-serif;
    outline:none;
    cursor: pointer;
    text-decoration:none;
  }
  .line{
    height:.5rem;
    background: #881111;
    margin-bottom: 1.5rem;
  }
  img{
    width: 100%;
    height: 65vh;
    object-fit:cover;
  }`

const Hide = styled.div`
  overflow:hidden;
`

export default MovieList
