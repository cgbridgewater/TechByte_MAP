import './App.css';
import Content from './components/Content';
import Navibar from './components/Navibar';
import ItemCard from './components/Product_cards';


function App() {
  return (

    <div className="App">

        <Navibar/>
        <Content/>
        <div style={{display:"flex", flexWrap:"wrap"}}>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/> 
        <ItemCard/>
        <ItemCard/>
        <ItemCard/> 
        </div>
    </div>
  );
}

export default App;
