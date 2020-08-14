import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios 
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => {
      setCharacterData(response.data.results);
    })

    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <AppDiv className="App">
      <h1 className="Header">Characters</h1>
      <div className = "cardHolder">
        <Cards data = {characterData} />
      </div>
    </AppDiv>
  );
}


const AppDiv = styled.div`
h1 {
  color: #003399;
  transition: all 0.25s ease-in-out;
:hover {
  color: #CC0066;
  transition: all 0.25s ease-in-out;
  transform: scale(2) rotate(-7deg);
}
}
`;

export default App;
