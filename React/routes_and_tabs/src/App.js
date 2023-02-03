import './App.css';
// import PokedexDisplay from './components/tabDisplays/PokeDexDisplay'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TabDisplay from './components/TabDisplay';
import Construction from './components/tabDisplays/Construction';


function App() {

  return (
      <BrowserRouter> 
    <div className="App">

                <Routes> 

                  <Route path='/' element={< TabDisplay /> }/>
                  {/* <Route path='/pokemon/:input' element={<PokedexDisplay /> }/> */}
                  <Route path='/pokemon/construction' element={< Construction />}/> 
                  <Route /> 

                </Routes>

        </div>
      </BrowserRouter>

  );
}

export default App;