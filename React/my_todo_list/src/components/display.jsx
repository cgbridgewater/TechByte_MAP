import { useState } from "react";
import TodoForm from "./form";

const DisplayTodoList = ({list, removeTodoTask, updateList, setTodoList, errors}) => {

    const [ todo, setTodo] = useState("");
    // const [ completed, setCompleted] = useState(true)
    // const [ updateForm, setUpdateForm] = useState("")

    // const [checked, setChecked] = useState(false);

    const handleChecked = (e,i) => {
        const copiedList = [...list];
        copiedList[i].checked = e.target.checked;
        setTodoList(copiedList);
    }



    return(
        <div className="DisplayContainer">
                    {errors.map((err, i) => (
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
                                    checked={TodoForm.checked}
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
                                        name="updateForm"
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
                                >
                                Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default DisplayTodoList