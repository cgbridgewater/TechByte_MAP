import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Home from './components/Home';
// import Four from './components/4';
import Hello from './components/Hello';
import HelloColors from './components/HelloColors';

function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path='/' element={<Index /> }/>
          <Route path='/home' element={<Home /> }/>
          <Route path='/:hello' element={<Hello /> }/>
          <Route path='/:name/:hello?/:red?/:blue?' element={<HelloColors /> }/>
          
          {/* <Route path='/:hello?' element={<Hello /> }/> */}
        </Routes>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
