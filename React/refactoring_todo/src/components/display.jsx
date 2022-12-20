import { useState } from "react";
// import TodoForm from "./form";

const DisplayTodoList = ({list, setTodoList}) => {

    const [ todo, setTodo] = useState("");
    const [ errors, setErrors ] = useState([])

    // delete action //
    const removeTodoTask = (id) => {
        const filteredList = [...list].filter((removeItem) => {
            return removeItem.id !== id;
        });
        setTodoList(filteredList);
    };

    // update action //
    const updateList = (e, todo, index, id) => {
        e.preventDefault();
        const copiedList = [...list];
        const errorList = [];
        // validation //
        if (todo.length < 3) {
            errorList.push("Update must contain at least 3 characters!")
        }
        if (errorList.length > 0) {
            setErrors(errorList);
        } else { // if validations pass do this //
            copiedList[index] = {...copiedList[index], todo};
            setTodoList(copiedList);
            setErrors([]);
            setTodo("")
        }
    };

    // check box action //
    const handleChecked = (e,i) => {
        const copiedList = [...list];
        copiedList[i].checked = e.target.checked;
        setTodoList(copiedList);
    }


    return(
        <div className="DisplayContainer">
                    {errors.map((err, i) => ( // validation error message //
                        <p className="ErrorText" key={i}>
                            {err}
                        </p>
                    ))}
            <table className="Display Table"> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Completed</th>
                        <th>Update Task</th>
                        <th>Delete Task</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item,i) => (
                        <tr>
                            <td>{item.id}</td>
                            {
                            item.checked?
                            <td className="Complete" >{item.todo}</td> :
                            <td className="NotComplete" disabled>{item.todo}</td>
                            }
                            <td>
                                <input 
                                    className="Checkbox"
                                    type="checkbox" 
                                    name="checkbox"
                                    checked={item.checked}
                                    onChange={(e) => 
                                        handleChecked(e,i)
                                    }
                                />
                            </td>
                            <td>
                                <form onSubmit={(e) => updateList(e, todo, i, item.id)}>
                                    <input 
                                        className="UpdateInput"
                                        type="text" 
                                        // key={item.id} 
                                        value={todo.todo}
                                        onChange={(e) =>
                                            setTodo(e.target.value)
                                        }
                                    />        
                                    <input 
                                        className="SubmitButton" 
                                        type="submit" 
                                        value="Update" 
                                    />
                                </form>
                            </td>
                            <td>
                                <button
                                    onClick={() => 
                                        removeTodoTask(item.id)
                                    }
                                    className="DeleteButton"
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default DisplayTodoList