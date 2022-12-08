import './App.css';
// import Groceries from './components/boxes';
import MessageForm from './components/messageForm';
import MessageDisplay from './components/messageDisplay';
import {useState} from "react";


function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  // const youveGotmail = (newMessage) => {
  //   setCurrentMsg(newMessage);
  // }
// ########## this is using a passthrough function  --  Do I need this???

  return (
    <div className="App">

      {/* <MessageForm onNewMessage={youveGotmail} /> */}

      <MessageForm setCurrent={setCurrentMsg} />
      <MessageDisplay  message={ currentMsg } />

      {/* <Groceries/> */}
    </div>
  );
}

export default App;
