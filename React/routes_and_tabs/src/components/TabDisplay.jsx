import { useState } from 'react';
import Tab from './tabholder/Tab'
import Tabs from './tabholder/Tabs';
import TabPanel from './tabholder/TabPanel';
import Tab1 from './tabDisplays/TapPage1';
import Tab2 from './tabDisplays/TabPage2';
import Tab3 from './tabDisplays/TabPage3';
import PokeDexForm from './tabDisplays/PokeDexForm'
import PokeDexDisplay from './tabDisplays/PeopleDisplay';


  const TabDisplay = (props) => {

  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  return (
    <div className="TabDisplay">
        <div className='TabsContainer' >
        <Tabs selectedTab={activeTab} onChange={handleChange} >
          <Tab label="What is Pokémon" value={1}/>
          <Tab label="PlaceHolder for Pokemon" value={2}/>
          <Tab label="Pokédex" value={3}/>
        </Tabs>
        </div>

        <div className='TabPanelContainer'>
          
              <TabPanel value={activeTab} selectedIndex={1}>
                  <Tab1/>
              </TabPanel>


              <TabPanel value={activeTab} selectedIndex={2}>
                  <Tab2/>
              </TabPanel>


              <TabPanel value={activeTab} selectedIndex={3}>
                  <PokeDexForm/>
                  <PokeDexDisplay/>
                  <Tab3/>
              </TabPanel>

        </div>
    </div>
  );
}

export default TabDisplay;