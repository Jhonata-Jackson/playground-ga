import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import GA4 from '../GA4';

function App() {

  const ga = new GA4()

  const setupGA = () => {
    console.log(">>> setupGA");
    ga.getGA("G-9W1T595FK3")
  }

  useEffect(() => {
    setupGA()
  }, [])

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

export default App;
