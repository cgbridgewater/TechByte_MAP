import { useState } from "react";

const DisplayTodoList = (props) => {
    const { list, removeTodoTask, updateList } = props;
    const [ todo, setTodo] = useState("");
    const [ completed, setCompleted] = useState(true)

    return(
        <div className="DisplayContainer">
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
                            completed?
                            <td className="Complete" >{item.todo}</td> :
                            <td className="NotComplete" disabled>{item.todo}</td>
                            }
                            <td>
                                <input 
                                    className="Checkbox"
                                    type="checkbox" 
                                    name="checkbox" 
                                    id="" 
                                    onChange={(e) => 
                                        setCompleted(e.target.value)
                                    }
                                    />

                            </td>
                            <td>
                                <form onSubmit={(e) => updateList(e, todo, i)}>
                                    <input 
                                    className="UpdateInput"
                                    type="text" 
                                    onChange={(e) =>
                                    setTodo(e.target.value)
                                    }
                                    />
                                    <input className="SubmitButton" type="submit" value="Update" />
                                </form>
                            </td>
                            <td>
                                <button
                                onClick={() => removeTodoTask(item.id)}
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