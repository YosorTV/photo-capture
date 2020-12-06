import React, { useEffect, useState } from 'react';
import MovieService from './movieService';

import GlobalStyle from './components/GlobalStyle';

import Navigation from './components/Navigation';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

import {Switch, Route} from 'react-router-dom';

function App() {
  // const [movies, setMovies] = useState([]);

  // const getMovies = async () => {
  //   const { data } = await movieService.get('/');
  //     console.log('data: ', data);
  // }


  // getMovie()

  // useEffect(() => getMovie(), [movies])
  

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
