import React from 'react';
import './App.css';
import RiddleList from './components/RiddleList';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Brainteasers</h1>
        <p>by Dean Foley</p>
      </nav>
      <RiddleList />
    </div>
  );
}

export default App;
