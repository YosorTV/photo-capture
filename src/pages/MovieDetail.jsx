import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Award from '../components/Award';
// Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const MovieDetail = ({ movies }) => {
  const [movie, setMovie] = useState(movies);

  const history = useHistory();
  const url = history.location.pathname;
  

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
      setMovie(currentMovie[0]);
  }, [movies, url])

  return (
    <>
    {movie && movie.awards && (
      <Details
        variants={pageAnimation} 
        initial="hidden" 
        animate="show" 
        exit="exit"
        style={{background:"#e6e6e6"}}
      >
        <Headline>
          <h2>{movie.title}</h2>
          <img src={movie.mainImg} alt=""/>
        </Headline>
        <Awards>
          {movie.awards.map(award => 
            <Award 
              title={award.title}
              description={award.description}
              key={award.title}
          />)}
        </Awards>
        <ImageDisplay>
          <img src={movie.secondaryImg} alt="movie"></img>
        </ImageDisplay>
      </Details>
    )}  
    </>
  )
}

const Details = styled(motion.div)`
    color:#1b1b1b;
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    text-transform: uppercase;
`
const Headline = styled.div`
  min-height: 80vh;
  padding-top: 10vh;
  position:relative;
  h2{
    position: absolute;
    top:1%;
    left:50%;
    transform:translate(-50%, -10%);
  }
  img{
    width:100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width:1300px){
    h2{
      top:4%;
      font-size:2.5rem;
    }
  }
  @media (max-width:1300px){
    h2{
      top:4%;
      font-size:2.5rem;
    }
  }
  @media (max-width:600px){
    h2{
      top:4%;
      font-size:1.8rem;
    }
  }
`

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 2.5rem 5rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width:600px){
    margin: 1rem 2rem;
    flex-direction:column;
    text-align:center;
    .line{
      width:100%;
    }
  }
`

const ImageDisplay = styled.div`
  min-height: 50vh;
  img{
    width:100%;
    height: 100vh;
    object-fit:cover;
    position: relative;
    top: 4px;
  }
`


export default MovieDetail
