import React from 'react';
import logo from './logo.svg';
import './App.css';

import weightedSampler from './data/Sampler';

function App() {
  console.log(weightedSampler);
  for (let i = 0; i < 1000; i++) {
    console.log(weightedSampler.get());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
