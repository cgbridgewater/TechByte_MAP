import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabPanel } from './components/tabs/tabs';
import DisplayTodoList from './components/tabs/display';
import TodoForm from './components/tabs/form';

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
height: 100vh;
`;

function App() {

    // lifting state to give access between components //
    const [ todoList, setTodoList ] = useState([]);

    // lifting start for updating list action
    const addToList = (record) => {
      setTodoList([...todoList, record]);
    };

  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  return (
    <div className="App">
    <TabsContainer >
    <Tabs selectedTab={activeTab} onChange={handleChange} >
      <Tab label="Tab 1" value={1}></Tab>
      <Tab label="Tab 2" value={2}></Tab>
      <Tab label="Tab 3" value={3}></Tab>
      <Tab label="Tab 4" value={4}></Tab>
    </Tabs>
    </TabsContainer>
    <TabPanelContainer>
      <TabPanel value={activeTab} selectedIndex={1}>
      
        <TodoForm 
          list= {todoList}
          addToList= {addToList}
        />


      </TabPanel>
      <TabPanel value={activeTab} selectedIndex={2}>
      
        <DisplayTodoList
          list= {todoList}
          setTodoList={setTodoList}
        />

      </TabPanel>
      <TabPanel value={activeTab} selectedIndex={3}>
        <h5>Tab 3 Contents</h5>
        <p>Nothing yet</p>
        <p>Nothing yet</p>
      </TabPanel>
      <TabPanel value={activeTab} selectedIndex={4}>
        <h5>Tab 4 Contents</h5>
        <p>Nothing yet</p>
        <p>Nothing yet</p>
      </TabPanel>
    </TabPanelContainer>

    </div>
  );
}

export default App;