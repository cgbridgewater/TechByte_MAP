import './App.css';
import Example from './components/api';
import AxiosAPI from './components/dojoAxios';
import GetChuck from './components/axiosapi';
import MyTime from './components/time';

function App() {

  return (
    <div className="App">
      <div>
        <MyTime />
      </div>

      <div>
        <AxiosAPI />
      </div>
      <div>
        <GetChuck />
      </div>

      <div>
        <div>
            <Example />
        </div>
      </div>
    </div>
  );
}

export default App;