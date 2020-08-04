import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {
  Container,
  AppBar,
  Tabs,
  TabPanel,
  Tab,
} from '@material-ui/core';
import { Jokes } from './components/Jokes'
function App() {
  return (
    <>
      <BrowserRouter>

        <div>
          <Route exact path="/" component={Jokes} />
          <Route exact path="/joke" component={Jokes} />
        </div>

      </BrowserRouter>
{/* 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
