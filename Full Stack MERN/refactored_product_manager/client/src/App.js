import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Detail from './components/Detail';
import Index from './components/Index'
import Update from './components/Update';
import Navibar from './components/Navibar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navibar/>
      <Routes>
        <Route element={<Index/>} path="/" default />
        <Route element={<Main/>} path="/home" />
        <Route element={<Update/>} path="/item/edit/:id"/>
        <Route element={<Detail/>} path="/item/:id" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
