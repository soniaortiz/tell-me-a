import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route
} from "react-router-dom";

import { Jokes } from './components/Jokes'
import { Home } from './components/Home'

function App() {
  return (
    <>
        <BrowserRouter>

          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/joke" component={Jokes} />
          </div>

        </BrowserRouter>


    </>
  );
}

export default App;
