import './App.css';
import { useState } from 'react';
import TodoForm from './components/form';
import DisplayTodoList from './components/display';

function App() {
  
  // lifting state to give access between components //
  const [ todoList, setTodoList ] = useState([]);

  // lifting start for updating list action
  const addToList = (record) => {
    setTodoList([...todoList, record]);
  };

  
  // localStorage.setItem("key", "value")

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem("todoList", JSON.stringify('todoList'));
  // }, ['todoList']);
  
  return (
    <div className="App">
        <TodoForm 
        list= {todoList}
        addToList= {addToList}
        />
        <DisplayTodoList
        list= {todoList}
        setTodoList={setTodoList}
        />
    </div>
  );
};

export default App;