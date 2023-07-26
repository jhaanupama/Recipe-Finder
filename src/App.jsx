import React from 'react';
import './App.css'; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import Submit from "./Submit";
import {BrowserRouter as Router,Route, Routes, BrowserRouter} from 'react-router-dom';
import MainContent from "./MainContent";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const recipes = [
    {
      id: 0,
      name: "Omelet",
      procedure:
        "The procedure to make omelet is as follows.Begin the day with a fluffy omelet filled with your favorite things. From soft French-inspired eggs to a classic Denver omelet loaded with meat and cheese, our collection of easy omelet recipes covers it all. Pull out your pan and serve up delightfully savory omelets that will make your morning (or any time of day) more delicious.",
    },
    {
      id: 1,
      name: "Maggi",
      procedure: "The procedure to make Maggi is as follows.The preparation of MAGGI® Noodles starts with mixing of flour, water etc. in a mixer to produce the dough. The dough, then goes through a series of rollers to form a thin sheet, which is then artfully cut into fine noodle strands. These strands are then waved, folded and cooked to form the final noodle cake.",
    },
  ];

  
  return (
    <Router>
    <div className='nav-links'>
    
     
    <Switch>
            <Route path = "/">
                <MainContent />
            </Route>
     
            </Switch>
      </div>
 
 </Router>
  );
}

export default App;
