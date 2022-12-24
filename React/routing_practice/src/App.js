import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Home from './components/Home';
import Guess from './components/Guess';
import HelloColors from './components/HelloColors';

function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path='/' element={<Index /> }/>
          <Route path='/home' element={<Home /> }/>
          <Route path='/Guess/:number' element={<Guess /> }/>
          <Route path='/:name/:hello/:red?/:blue?' element={<HelloColors /> }/>
          
          {/* <Route path='/:hello?' element={<Hello /> }/> */}
        </Routes>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
