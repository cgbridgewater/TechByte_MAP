import './App.css';
// import data from "./api_stuff/data.json"
import {useEffect} from 'react';

function App() {

  // const getData= () => {
  //   fetch("./api_stuff/data.json")
  //   .then( (res) => console.log(res.body) )
  //   // .then( data => console.log(data) )
  //   .catch( err => console.log(err) )
  // }

  useEffect(() => {
    console.log("i'm running");
  }, []);


  return (
    <div className="App">

      {/* <button onClick={getData}>Fetch</button> */}

      {/* <h1>{data.name}</h1>
      <h1>{JSON.stringify(data)}</h1> */}

    </div>
  );
}

export default App;
