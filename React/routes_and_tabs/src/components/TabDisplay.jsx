import { useState } from 'react';
import Tab from './tabholder/Tab'
import Tabs from './tabholder/Tabs';
import TabPanel from './tabholder/TabPanel';
import WhatIsPokemon from './tabDisplays/WhatIsPokemon';
import Tab2 from './tabDisplays/TabPage2';
import Pokedex from './tabDisplays/Pokedex';
import Footer from './tabDisplays/Footer';

  const TabDisplay = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  return (
    <div className="TabDisplay">
      
      {/* Tab Control */}
      <div className='TabsContainer' >
      <Tabs selectedTab={activeTab} onChange={handleChange} >
        <Tab label="What is Pokémon" value={1}/>
        <Tab label="Sleeping Pikachu" value={2}/>
        <Tab label="Pokémon Games" value={3}/>
        <Tab label="Pokémon Cards" value={4}/>
        <Tab label="Pokédex" value={5}/>
      </Tabs>
      </div>

      {/* Tab Window Control */}
      <div className='TabPanelContainer'>

        {/* Tab window 1 */}
        <TabPanel value={activeTab} selectedIndex={1}>
            <WhatIsPokemon/>
        </TabPanel>

        {/* Tab window 2 */}
        <TabPanel value={activeTab} selectedIndex={2}>
            <Tab2/>
        </TabPanel>

        {/* Tab window 3 */}
        <TabPanel value={activeTab} selectedIndex={3}>
          Tab 3 testing
        </TabPanel>

        {/* Tab window 4 */}
        <TabPanel value={activeTab} selectedIndex={4}>
        <h1>tab 4 testing</h1>
        </TabPanel>

        {/* Tab window 5 */}
        <TabPanel value={activeTab} selectedIndex={5}>
          <Pokedex/>
        </TabPanel>

        {/* Page footer */}
        <Footer/>
      </div>
    </div>
  );
}

export default TabDisplay;