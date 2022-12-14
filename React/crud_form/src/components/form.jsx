import React, { useState } from  'react';
// import Display from './display-2';

const Form = ({ addToList, list }) => {
    const initialForm = {
        id: 1,
        firstname: "",
        lastname: "",
        email: "",
    };

    const [ myForm, setMyForm ] = useState(initialForm);
    const [ errors , setErrors ] = useState([]);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const errorList = [];

        if(myForm.firstname.length < 2) {
            errorList.push("First name must be 2 characters or longer!");
        }
        if(myForm.lastname.length < 2) {
            errorList.push("Last name must be 2 characters or longer!");
        }
        if(myForm.email.length < 3) {
            errorList.push("Email must be 3 characters or longer!");
        }
        if(errorList.length > 0) {
            setErrors(errorList);
        } else {
            addToList(myForm);
            setMyForm(initialForm);
            setErrors([]);
        }
    };

    const onChangeHandler  = (e) => {
        let increment = list[0] ? list[list.length - 1].id + 1 : 1;
        setMyForm({
            ...myForm,
            id: increment,
            [e.target.name]: e.target.value,
            // [e.target.lastname]: e.target.value,
            // [e.target.email]: e.target.value,
        });
    };


    return(
        <>
            <div className='Alignment'>
                <div className='Container'>
                        <form className='Form' onSubmit={ onSubmitHandler }>
                            {errors.map((err, i) => (
                                <p className='Err' key={i}>
                                    {err}
                                </p>
                            ))}
                            <div>
                                <div>
                                    <label htmlFor = "firstname" >First Name: </label> 
                                    <input 
                                    name="firstname"
                                    type="text"
                                    value={myForm.firstname}
                                    onChange={onChangeHandler}
                                    />
                                </div>
                                <div>
                                    <label htmlFor = "lastname" >Last Name: </label> 
                                    <input 
                                    name="lastname"
                                    type="text" 
                                    value={myForm.lastname} 
                                    onChange={onChangeHandler} 
                                    />
                                </div>
                                <div>
                                    <label htmlFor = "email" >Email Address: </label> 
                                    <input 
                                    name="email"
                                    type="email" 
                                    value={myForm.email} 
                                    onChange={onChangeHandler} 
                                    />
                                </div>

                                <input className='btn1' type="submit" value="Complete Form!"  />
                            </div>
                        </form>
                    <hr />
                                {/* <Display
                                firstname={myForm.firstname}
                                lastname={myForm.lastname}
                                email={myForm.email}
                                /> */}
                </div>
            </div>
        </>
    );
};
    
export default Form;
