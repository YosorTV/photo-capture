import React, { useEffect, useState } from 'react';
import movieService from './movieService';

import GlobalStyle from './components/GlobalStyle';
import ScrollTop from './components/ScrollTop';

import Navigation from './components/Navigation';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

import {Switch, Route, useLocation} from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';
const App = () => {
const [movies, setMovies] = useState([]);

const getMovies = async () => {
  const { data } = await movieService.get('/');
    setMovies(data);
}

const location = useLocation();
useEffect(() => getMovies(), []);

  return (
    <div className="App">
    <GlobalStyle />
    <ScrollTop />
      <Navigation/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork movies={movies}/>
        </Route>
        <Route path="/work/:id">
          <MovieDetail movies={movies}/>
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
