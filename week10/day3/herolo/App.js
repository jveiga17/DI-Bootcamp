/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';                               // managing state and lifecycle
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // handling navigation
import Weather from './components/Weather';
import Favorites from './components/Favorites';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* header w nav links */}
        <header>
          <Link to="/">Weather</Link>
          <Link to="/favorites">Favorites</Link>
        </header>

        {/* switch - handle diff routes */}
        {/* defining routes */}
        <Switch> 
          <Route path="/favorites" component={Favorites} />
          <Route path="/" exact component={Weather} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;