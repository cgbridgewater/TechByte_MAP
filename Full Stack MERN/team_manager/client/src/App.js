import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Main from './views/Main';
import Update from './components/Update';
import Detail from './components/Detail';
import Indexpage from './components/Index';
import PlayerForm from './components/PlayerForm'
import PlayerList from './components/PlayerList';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import Game3 from './components/Game3';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Indexpage/>} path="/" default/>
          <Route element={<PlayerList/>} path="/home"/>
          <Route element={<PlayerForm/>} path="/add"/>
          <Route element={<Game1/>} path="/game/1"/>
          <Route element={<Game2/>} path="/game/2"/>
          <Route element={<Game3/>} path="/game/3"/>
          <Route element={<Update/>} path="/player/edit/:id"/>
          <Route element={<Detail/>} path="/player/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
