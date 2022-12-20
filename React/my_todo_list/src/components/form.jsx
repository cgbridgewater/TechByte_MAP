import { useState } from "react";

const TodoForm = ({ addToList, list, todoForm, setTodoForm, initialForm}) => {

    const [ errors, setErrors ] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        const errorList = [];

        if (todoForm.todo.length < 3) {
            errorList.push("Task must contain at least 3 characters!")
        }
        if (errorList.length > 0) {
            setErrors(errorList);
        } else {
            addToList(todoForm);
            setTodoForm(initialForm);
            setErrors([]);
        }
    }

    const onChangeHandler = (e) => {
        let increment = list[0] ? list[list.length -1].id + 1 : 1;
        setTodoForm({
            ...todoForm,
            id: increment,
            [e.target.name]: e.target.value,
        });
    };


    return(
        <div>
            <h1>--TODO List--</h1>
            {errors.map((err, i) => (
                <p className="ErrorText" key={i}>
                    {err}
                </p>
            ))}
            <br />
            <div>
                <form className="TodoForm" onSubmit={ submitHandler } >
                    <label
                        className="TodoLabel" 
                        htmlFor="todo"
                        >
                            Task That Needs The Doing:
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
                    <button className="TodoButton" >Add Task</button>
                </form>
            </div>
        </div>
    )
}

export default TodoForm