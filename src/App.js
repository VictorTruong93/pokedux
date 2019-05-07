import React from 'react';
import './App.css';
import SmartPokeList from './containers/PokeListContainer'
function App() {
  return (
    <div className="App">
      <h1>
        PokeThings
      </h1>
      <SmartPokeList />
    </div>
  );
}

export default App;
