import './App.css';
import "@fontsource/syncopate"; // Defaults to weight 400
import "@fontsource/syncopate/400.css"; // Specify weight
import Content from './components/content/content';
import Header from './components/header/header';
import Tldr from './components/content/tldr/tldr';

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
