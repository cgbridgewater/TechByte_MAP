import { useState } from 'react';
import Tab from './tabholder/Tab'
import Tabs from './tabholder/Tabs';
import TabPanel from './tabholder/TabPanel';
import Tab1 from './tabDisplays/TapPage1';
import Tab2 from './tabDisplays/TabPage2';
import Tab3 from './tabDisplays/TabPage3';
import Footer from './Footer';

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
        <Tab label="PlaceHolder for Pokemon" value={2}/>
        <Tab label="Pokédex" value={3}/>
      </Tabs>
      </div>

      {/* Tab Window Control */}
      <div className='TabPanelContainer'>

        {/* Tab window 1 */}
        <TabPanel value={activeTab} selectedIndex={1}>
            <Tab1/>
        </TabPanel>

        {/* Tab window 2 */}
        <TabPanel value={activeTab} selectedIndex={2}>
            <Tab2/>
        </TabPanel>

        {/* Tab window 3 */}
        <TabPanel value={activeTab} selectedIndex={3}>
            <Tab3/>
        </TabPanel>

        {/* Page footer */}
        <Footer/>
      </div>
    </div>
  );
}

export default TabDisplay;