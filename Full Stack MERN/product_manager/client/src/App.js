import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Detail from './components/Detail';
import Indexpage from './components/Index';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Indexpage />} path="/" default />
        <Route element={<Main/>} path="/home" default />
        <Route element={<Update/>} path="/item/edit/:id"/>
        <Route element={<Detail/>} path="/item/:id" />
      </Routes>
    </BrowserRouter>
      {/* <ItemForm/> */}
    </div>
  );
}

export default App;
