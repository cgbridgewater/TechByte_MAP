import './App.css';
import { useState } from 'react';
import TodoForm from './components/form';
import DisplayTodoList from './components/display';

function App() {

  const [ todoList, setTodoList ] = useState([]);

  const removeTodoTask = (id) => {
    const filteredList = [...todoList].filter((update) => {
      return update.id !== id;
    });
    setTodoList(filteredList);
  };

  const updateList = (e, todo, index) => {
    e.preventDefault();
    const copiedList = [...todoList];
    copiedList[index] = {...copiedList[index], todo:todo};
    setTodoList(copiedList);
  };

  const addToList = (record) => {
    setTodoList([...todoList, record]);
  };


  return (
    <div className="App">

      <TodoForm 
      list= {todoList}
      addToList= {addToList}
      />
      <DisplayTodoList
      updateList= {updateList}
      removeTodoTask= {removeTodoTask}
      list= {todoList}
      />
    </div>
  );
}

export default App;
