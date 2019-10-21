import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

function ToDoApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><ToDoList /></Route>
        <Route path="/themes"><Themes /></Route>
      </Switch>
    </BrowserRouter>
  )
}

function ToDoList() {
  return (
    <div className="container">
      <div className="todoBox">

        <div className="todoBox-heading">TODOS</div>

        <div className="todoBox-content">
          <input></input>
          <button className="button-text"><span>Add</span></button>
        </div>
      </div>
    </div>
  );
}

function Themes() {
  return (
    <h1>TODO themes</h1>
  )
}

export default ToDoApp;
