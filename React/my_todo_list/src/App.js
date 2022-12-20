import './App.css';
import { useState } from 'react';
import TodoForm from './components/form';
import DisplayTodoList from './components/display';

function App() {

    const initialForm = {
        id: 0,
        todo: "",
        checked: false
    };

  const [ todoForm, setTodoForm] = useState(initialForm)
  
  const [ todoList, setTodoList ] = useState([]);
  const [ errors, setErrors ] = useState([])
  
  const removeTodoTask = (id) => {
    const filteredList = [...todoList].filter((removeItem) => {
      return removeItem.id !== id;
    });
    setTodoList(filteredList);
  };
  
  const updateList = (e, todo, index, id) => {
    e.preventDefault();
    const copiedList = [...todoList];
    const errorList = [];

    if (todo.length < 3) {
        errorList.push("Update must contain at least 3 characters!")
    }
    if (errorList.length > 0) {
        setErrors(errorList);
    } else {
        copiedList[index] = {...copiedList[index], todo};
        setTodoList(copiedList);
        setErrors([]);
    }
  };
  
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
      initialForm= {initialForm}
      todoForm= {todoForm}
      setTodoForm= {setTodoForm}
      />
      <DisplayTodoList
      updateList= {updateList}
      removeTodoTask= {removeTodoTask}
      list= {todoList}
      // initialForm= {initialForm}
      // todoForm= {todoForm}
      // setTodoForm= {setTodoForm}
      setTodoList={setTodoList}
      errors={errors}
      />
    </div>
  );
}

export default App;
