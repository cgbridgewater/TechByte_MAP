import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './views/Main';
import Update from './components/Update';
import Detail from './components/Detail';
import Indexpage from './components/Index';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Indexpage/>} path="/" default/>
          <Route element={<Main/>} path="/home" />
          <Route element={<Update/>} path="/people/edit/:id"/>
          <Route element={<Detail/>} path="/people/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
