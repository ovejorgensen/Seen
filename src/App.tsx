import React from 'react';
import './App.scss';
import SearchBar from './components/searchbar/SearchBar';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
    </div>
  );
}

export default App;
