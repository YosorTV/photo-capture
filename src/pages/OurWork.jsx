import React from 'react';
// images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// Components
import MovieList, { Work } from '../components/MovieList';

const movies = [
  {
    id:0,
    movieName: "The Athelete",
    movieImg: athlete
  },
  {
    id:1,
    movieName: "The Racer",
    movieImg: theracer
  },
  {
    id:2,
    movieName: "Good Times",
    movieImg: goodtimes
  }
]

const OurWork = () => {
  return (
    <Work>
      {movies.map(({ id, movieName, movieImg }) => 
        <MovieList 
          key={id}
          movieName={movieName}
          movieImg={movieImg}
        />
      )}
    </Work>
  )
}


export default OurWork
