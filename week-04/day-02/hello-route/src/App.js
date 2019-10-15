import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/error"><Error /></Route>
        <Route path="/error/:errorCode"><ErrorCode /></Route>
        <Route path=""><NotImplemented /></Route>
      </Switch>
    </Router>
  );
}


function Home() {
  return (
    <h1>Hello World</h1>
  )
}

function Error() {
  return (
    <h1><strong>Something bad happened</strong></h1>
  )
}

function ErrorCode() {
  let { errorCode } = useParams();

  return (
    <h1>Error: {errorCode}</h1>
  )
}

function NotImplemented() {
  return (
    <h1>This page is note implemented yet...</h1>
  )
}

export { App, AppWithRouter };
