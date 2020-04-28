import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Hash from './Hash';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <Link to="/">Home</Link>
        </header>
        <div>
          <Route exact path="/" component={Hash} />
        </div>
      </div>
    </Router>
  );
}

export default App;
