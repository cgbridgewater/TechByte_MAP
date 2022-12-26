import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LukeAPIForm from './components/apiWalkerForm';
import APIWalkerPeopleDisplay from './components/PeopleDisplay';
import APIWalkerPlanetsDisplay from './components/PlanetDisplay';
import APIWalkerFilmsDisplay from './components/FilmsDisplay';
import APIWalkerStarshipsDisplay from './components/StarshipsDisplay';
import APIWalkerVehiclesDisplay from './components/VehiclesDisplay';
import APIWalkerSpeciesDisplay from './components/Species';
import APIWalkerPlanetByNameDisplay from './components/PlanetByNameDisplay';


function App() {
  return (

    <BrowserRouter>
    
      <div className="App">

        <Routes>
          <Route path='/' element={<LukeAPIForm /> }/>
          <Route path='/people/:_id' element={<APIWalkerPeopleDisplay /> }/>
          <Route path='/planets/:_id' element={<APIWalkerPlanetsDisplay /> }/>
          <Route path='/planetByName/:name' element={<APIWalkerPlanetByNameDisplay /> }/>
          <Route path='/films/:_id' element={<APIWalkerFilmsDisplay /> }/>
          <Route path='/starships/:_id' element={<APIWalkerStarshipsDisplay /> }/>
          <Route path='/vehicles/:_id' element={<APIWalkerVehiclesDisplay /> }/>
          <Route path='/species/:_id' element={<APIWalkerSpeciesDisplay /> }/>
        </Routes>
  
      </div>

    </BrowserRouter>
  );
}

export default App;
