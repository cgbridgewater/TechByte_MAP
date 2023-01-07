import './App.css';
import { useState } from 'react';
import APIWalkerPeopleDisplay from './components/tabDisplays/PeopleDisplay'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TabDisplay from './components/TabDisplay';


function App() {

  return (
      <BrowserRouter> 
    <div className="App">

                <Routes> 

                  <Route path='/' element={<TabDisplay /> }/>
                  <Route path='/people/:_id' element={<APIWalkerPeopleDisplay /> }/>
                  <Route /> 
                  <Route /> 

                </Routes>

        </div>
      </BrowserRouter>

  );
}

export default App;