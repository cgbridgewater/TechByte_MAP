import './App.css';
import MyNewComponent from './components/childern';

function App() {
  return (
    <div className="App">

        <MyNewComponent header={ "This is the Header Prop" }>
            <h1>These are children</h1>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>

    </div>
  );
}

export default App;