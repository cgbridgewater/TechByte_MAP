import { useState } from "react";

const TodoForm = ({ addToList, list}) => {

    // form initilization
    const initialForm = {
        id: 0,
        todo: "",
        checked: false
    };
    
    const [ todoForm, setTodoForm] = useState(initialForm)
    const [ errors, setErrors ] = useState([])

    // submit handler action
    const submitHandler = (e) => {
        e.preventDefault();
        const errorList = [];
        // validations //
        if (todoForm.todo.length < 3) {
            errorList.push("Task must contain at least 3 characters!")
        }
        if (errorList.length > 0) {
            setErrors(errorList);
        } else { // if validations clear, do this //
            addToList(todoForm);
            setTodoForm(initialForm);
            setErrors([]);
        }
    }

    // ID incrementing action
    const onChangeHandler = (e) => {
        let increment = list[0] ? list[list.length -1].id + 1 : 1;
        setTodoForm({
            ...todoForm,
            id: increment,
            [e.target.name]: e.target.value,
        });
    };


    return(
        <div className="OuterShell">
            <h1>ADD TO LIST</h1>
                {errors.map((err, i) => (
                    <p className="ErrorText" key={i}>
                        {err}
                    </p>
                ))}
            <br />
            <div className="Container">
                <form className="TodoForm" onSubmit={ submitHandler } >
                    <label
                        className="TodoLabel" 
                        htmlFor="todo"
                        >
                        The Task That Needs The Doing:
                        </label>
                        <br />
                    <input 
                        className="TodoInput"
                        type="text" 
                        name="todo" 
                        // id=""
                        value={todoForm.todo}
                        onChange={ onChangeHandler } 
                    />
                    <br />
                    <button 
                        className="TodoButton" 
                    >Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default TodoForm