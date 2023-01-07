import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
// import { Tab, Tabs, TabPanel } from './components/tabs/tabs';
import Tab from './components/Tab'; 
import Tabs from './components/Tabs';
import TabPanel from './components/TabPanel';


const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
height: 100vh;
`;

function App() {

  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  return (
    <div className="App">
    <TabsContainer >
    <Tabs selectedTab={activeTab} onChange={handleChange} >
      <Tab label="Home" value={1}></Tab>
      <Tab label="Alt Tab 2" value={2}></Tab>
      <Tab label="Alt Tab 3" value={3}></Tab>
      <Tab label="Alt Tab 4" value={4}></Tab>
    </Tabs>
    </TabsContainer>
    <TabPanelContainer>
      <TabPanel value={activeTab} selectedIndex={1}>
      <h5>Home Page Contents</h5>
        <p>Nothing yet</p>
        <p>Nothing yet</p>
      </TabPanel>
      <TabPanel value={activeTab} selectedIndex={2}>
      <h5>Alt Tab 2 Contents</h5>
        <p>Nothing yet</p>
        <p>Nothing yet</p>
      </TabPanel>
      <TabPanel value={activeTab} selectedIndex={3}>
        <h5>Alt Tab 3 Contents</h5>
        <p>Nothing yet</p>
        <p>Nothing yet</p>
      </TabPanel>
      <TabPanel value={activeTab} selectedIndex={4}>
        <h5>Alt Tab 4 Contents</h5>
        <p>Nothing yet</p>
        <p>Nothing yet</p>
      </TabPanel>
    </TabPanelContainer>

    </div>
  );
}

export default App;