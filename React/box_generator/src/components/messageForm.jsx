import React, { useState } from 'react';
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    // const handleSubmit = (e) => {
    //     e.preventDefaulst();
    //     props.onNewMessage
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setCurrent(msg)
    };
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Set Message</h1>
                <textarea 
                    rows="2"
                    cols="20"
                    placeholder="Enter your message here"
                    onChange={ (e) => setMsg(e.target.value) }
                    value={ msg }
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>

        </div>
    );
};
    
export default MessageForm;
