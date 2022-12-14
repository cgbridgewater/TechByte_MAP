import './App.css';
import React, { useState } from 'react';
import ChrisDisplay from './components/ChrisDisplay';
import ChrisForm from './components/ChrisForm';

function App() {
  const [ wordArray, setWordArray ] = useState([]);

  return (

    <div className="App" style={{backgroundColor:"darkgrey", height:"1000px"}}>
      <ChrisForm wordArray={ wordArray } setWordArray= { setWordArray } />
      <ChrisDisplay wordArray={ wordArray } />
    </div>

  );
}

export default App;
