import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddAuthor from './components/AddAuthor';
import BadLink from './components/BadLink';
import Index from './components/Index';
import UpdateAuthor from './components/UpdateAuthor';
import Navibar from './components/Navibar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navibar/>
      <Routes>
        <Route element={<Index/>} path="/" default />
        <Route element={<AddAuthor/>} path="/new"/>
        <Route element={<UpdateAuthor/>} path="/edit/:id" />
        <Route element={<BadLink/>} path="/:bad" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
