import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TabDisplay from './components/TabDisplay';
import Construction from './components/tabDisplays/Construction';
import BadLink from './components/tabDisplays/BadLink';


function App() {

  return (
      <BrowserRouter> 
    <div className="App">

                <Routes> 

                  <Route path='/' element={< TabDisplay /> }/>
                  <Route path='/pokemon/construction' element={< Construction />}/> 
                  <Route path='/pokemon/:badlink' element={< BadLink />}/> 
                  <Route path='/:badlink' element={< BadLink />}/> 
                  <Route /> 

                </Routes>

        </div>
      </BrowserRouter>

  );
}

export default App;