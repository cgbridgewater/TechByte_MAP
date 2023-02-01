import './css/App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Logout from "./components/Logout"
import ShowUsers from "./components/ShowUsers"
import LoginPage from './components/LoginPage';
import Register from './components/RegPage';



function App() {

  const [authorized, setAuthorized] = useState("");
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage authorized={authorized} setAuthorized={setAuthorized}/>}/>
          <Route path='/register' element={<Register authorized={authorized} setAuthorized={setAuthorized}/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/users" element={<ShowUsers setAuthorized={setAuthorized}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;