import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Work = styled.div`
  min-height: 100vh;
  overflow:hidden;
  padding: 5rem 10rem;
    h2{
      padding: 1rem 0rem;
    }
`
const Movie = styled.div`
padding-bottom: 10rem;
  .line{
    height:.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit:cover;
  }
`

const MovieList = ({ movieName, movieImg }) => {
  return (
    <Movie>
    <h2>{movieName}</h2>
    <div className="line"></div>
    <Link>
      <img src={movieImg} alt="img"/>
    </Link>
  </Movie>
  )
}

export default MovieList
