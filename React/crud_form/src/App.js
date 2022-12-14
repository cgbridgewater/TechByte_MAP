import './App.css';
import Form from './components/form';
import DisplayList from './components/display';
import { useState } from "react";


function App() {

  
  const [newList, setNewList] = useState([]);

  const removeFromList = (id) => {
      const filteredList = [...newList].filter((update) => {
          return update.id !== id;
      });
      setNewList(filteredList);
  };

  const updateList = (e, firstname, index) => {
      e.preventDefault();
      const copiedList = [...newList];
      copiedList[index] = { ...copiedList[index], firstname: firstname };
      setNewList(copiedList);
  };

  const addToList = (record) => {
      setNewList([...newList, record]);
  };




  return (
    <div className="App">

      <Form 
          list= {newList} 
          addToList={addToList} 
      />
      <DisplayList
          updateList={updateList}
          removeFromList={removeFromList}
          list={newList}
      />

    </div>
  );
}

export default App;
