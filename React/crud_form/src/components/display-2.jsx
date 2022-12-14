const Display = (props) => {
    const { firstname, lastname, email } = props;
    return (
        <div className="bg-danger p-3">
            <h3>firstname: {firstname}</h3>
            <h3>lastname: {lastname}</h3>
            <h3>email: {email}</h3>
        </div>
    );
};

export default Display;