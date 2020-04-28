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
          <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGzuSBRRRuphw/company-logo_200_200/0?e=2159024400&v=beta&t=Rh5mO2IXBXf7-0BK0CAqkcBipZtgpLe4Oo2ZE7c0T_Y" className="App-logo" alt="logo" />
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
