import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Results from './components/results';



function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>

        <Route path='/' element={<Home /> }/>
        <Route path='/about' element={<About /> }/>
        <Route path='/results' element={<Results /> }/>
        <Route path='/results/:red?/:blue?' element={<Results /> }/>
        
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
