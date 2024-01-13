import './App.css';
import "@fontsource/syncopate"; 
import Header from './components/header/header';
import Content from './components/main/content/content';
import Tldr from './components/main/tldr/tldr';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Tldr/>
    </div>
  );
}

export default App;