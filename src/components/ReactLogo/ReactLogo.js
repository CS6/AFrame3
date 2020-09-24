import React from 'react';
import logo from './logo.svg';
import './ReactLogo.css';

function ReactLogo() {
  return (
    <div className="ReactLogo">
      <header className="ReactLogo-header">
        <img src={logo} className="ReactLogo-logo" alt="logo" />
        <p>
          Edit <code>src/ReactLogo.js</code> and save to reload.
        </p>
        <a
          className="ReactLogo-link"
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

export default App;
