import React from 'react';
import logo from './logo.svg';
import './App.css';
import { count, length } from './numbers.js'

let number = 56;
let a = 'ab';
let b = 'cba';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
        	color: 'green',
        	fontSize: 32
        }}>
        Hello, its me
        </p>
        <p>
        	{number}
        </p>
        <p>
        	{4568}
        </p>
        <p>
        	{89 + (456 * 2)}
        </p>
        <p>
        	{a == 'ab' && 'ok'}

        </p>
        <p>
        	{a == 'abc' ? 'ok' : 'not ok'}
        </p>
        <span>
        	{undefined}
        	{null}
        	{false}
        	{true}
        </span>
        <p>
        	{ count * length}
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
