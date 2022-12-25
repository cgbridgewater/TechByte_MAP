import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APIWalkerDisplay from './components/apiWalkerDisplay';
import LukeAPIForm from './components/apiWalkerForm';


function App() {
  return (

    <BrowserRouter>
    
      <div className="App">

        <Routes>
          <Route path='/' element={<LukeAPIForm /> }/>
          <Route path='/:name/:id' element={<APIWalkerDisplay /> }/>
        </Routes>
  
      </div>

    </BrowserRouter>
  );
}

export default App;
