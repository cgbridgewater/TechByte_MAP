import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Redirect from './components/Redirect';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Redirect/>} />
          <Route path='/home' element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/hello/:name/: age" element={<Hello />} />
          <Route path="/hello/:name" element={<Hello />} />
        </Routes>
      
      </BrowserRouter>



    </div>
  );
}

export default App;
