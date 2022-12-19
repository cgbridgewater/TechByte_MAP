import React, {useState} from 'react';
import './App.css';


function App() {

    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleNewTodoSubmit = (event) => {
      // prevent default action of reloading
      event.preventDefault();
      // prevent blank form entry
      if (newTodo.length === 0) {
        return;
      }

      // create dictionary of todo and completed status into one item
      const todoItem = {
        text: newTodo,
        complete: false
      }

      // set todos array and pass a brand new array of todoItem dictionaries plus 1 more
      setTodos([...todos, todoItem]);  
      setNewTodo("");
    };

    const handleTodoDelete = (delIdx) => {
      const filteredTodos = todos.filter((_todo, i) => {
        return i !== delIdx;
      });
      setTodos(filteredTodos);
    };

    const handleToggleComplete = (idx) => {
      const updatedTodos = todos.map((todo, i) => {
        if (idx === i) {
          todo.complete = !todo.complete;
          // to avoid mutating the todo directly do this:
          // const updatedTodo = {...todo, complete: !todo.complete };
          // return updatedTodo
        }

        return todo;
      })

      setTodos(updatedTodos);
    }


  return (
    <div className="App">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <label className='ListInputLabel' htmlFor="newTodo">Let's Make A Todo List!!</label>
        <br />
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type="text" 
        value={newTodo}/>  
        <br />
        <button className='Add'>Add Todo!</button>
      </form>      
        <hr />
        {todos.map((todo, i) => {
          const todoClasses =["Bold"];
          // action to do if box is checked
          if (todo.complete) {
            todoClasses.push("Line-through", "Italic");
          }
            return <div className='DisplayRow' key={i}>
              <input className='CheckBox' 
              onChange={(event) => {
              handleToggleComplete(i);
              }} 
              checked={todo.complete} 
              type="checkbox"
              /> 
              <span className={todoClasses.join(" ")} >{todo.text}</span>
              <button className='Delete' onClick={(event) => {
                handleTodoDelete(i);
              }}>
                Delete!
                </button>
            </div>
          })
        }


    </div>
  );
}

export default App;
