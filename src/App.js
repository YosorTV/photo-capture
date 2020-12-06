import React, { useEffect, useState } from 'react';
import movieService from './movieService';

import GlobalStyle from './components/GlobalStyle';

import Navigation from './components/Navigation';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

import {Switch, Route} from 'react-router-dom';

function App() {
  
const getMovies = () => {
  movieService.get('/').then(({data}) => console.log(data))
}
getMovies();

  return (
    <div className="App">
    <GlobalStyle />
      <Navigation/>
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
