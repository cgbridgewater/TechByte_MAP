import { useState } from "react";

const DisplayList = (props) => {
    const { list, removeFromList, updateList } = props;
    const [firstname, setFirstname] = useState("");
    return (
        <div className="container-sm bg-primary p-3 text-light">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, i) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>
                                <form onSubmit={(e) => updateList(e, firstname, i)}>
                                    <input
                                        type="text"
                                        onChange={(e) =>
                                            setFirstname(e.target.value)
                                        }
                                    />
                                <input type="submit" value="Update Name!" />
                                </form>
                                <button
                                    onClick={() => removeFromList(item.id)}
                                    className="btn btn-danger btn-outline-light"
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

export default DisplayList;