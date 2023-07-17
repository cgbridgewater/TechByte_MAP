import './App.css';

import Game from './TetrisComponents/Game';


export default function App() {
  return (
    <div className="App">
      <Game rows ={20} columns ={10} />
    </div>
  );
}


