import React from 'react';
import './App.css';
import SmartPokeList from './containers/PokeListContainer';
import SmartVisibilityButton from './containers/VisibilityContainer';
function App() {
  return (
    <div className="App">
      <h1>
        PokeThings
      </h1>
      <h2>
        <SmartVisibilityButton />
      </h2>
      <SmartPokeList />
    </div>
  );
}

export default App;
