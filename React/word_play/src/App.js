import './App.css';
import React, { useState } from 'react';
import Form from './components/form';
import Display from './components/display';

function App() {
  // holding an array of strings for the words input
  const [ wordArray, setWordArray ] = useState([]);


  return (

    <div className="App" style={{backgroundColor:"darkgrey", height:"1000px"}}>

 
      <Form wordArray={ wordArray } setWordArray= { setWordArray } />
      <Display wordArray={ wordArray } />
      
    </div>
  );
}

export default App;
