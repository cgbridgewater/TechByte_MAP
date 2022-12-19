import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabPanel } from './components/tabs/tabs';

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
      <Tab label="Tab 1" value={1}></Tab>
      <Tab label="Tab 2" value={2}></Tab>
      <Tab label="Tab 3" value={3}></Tab>
      <Tab label="Tab 4" value={4}></Tab>
    </Tabs>
    </TabsContainer>
    <TabPanelContainer>
      <TabPanel value={activeTab} selectedIndex={1}>
      <h5>Tab 1 Contents</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci modi quibusdam veritatis! Consequuntur voluptates ratione fuga eaque sed perferendis maiores velit exercitationem culpa tempora quia, veniam accusamus illum beatae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci modi quibusdam veritatis! Consequuntur voluptates ratione fuga eaque sed perferendis maiores velit exercitationem culpa tempora quia, veniam accusamus illum beatae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci modi quibusdam veritatis! Consequuntur voluptates ratione fuga eaque sed perferendis maiores velit exercitationem culpa tempora quia, veniam accusamus illum beatae.</p>
      </TabPanel>
      <TabPanel value={activeTab} selectedIndex={2}>
      <h5>Tab 2 Contents</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ad fuga dolorem sit veritatis nisi, magnam ea quaerat, reiciendis tempore aspernatur sint! Officia adipisci eos provident. Vero cumque fuga similique!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ad fuga dolorem sit veritatis nisi, magnam ea quaerat, reiciendis tempore aspernatur sint! Officia adipisci eos provident. Vero cumque fuga similique!</p>
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
