import './App.css';
import PokedexDisplay from './components/tabDisplays/PokeDexDisplay'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TabDisplay from './components/TabDisplay';
import Footer from './components/Footer';


function App() {

  return (
      <BrowserRouter> 
    <div className="App">

                <Routes> 

                  <Route path='/' element={<TabDisplay /> }/>
                  <Route path='/people/:_id' element={<PokedexDisplay /> }/>
                  <Route /> 
                  <Route /> 

                </Routes>

        </div>
      </BrowserRouter>

  );
}

export default App;