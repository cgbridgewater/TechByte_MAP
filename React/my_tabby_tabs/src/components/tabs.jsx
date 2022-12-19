import React from 'react';

const MyTabs = (props) => {
  const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

  // toggle styling based on the ID of the tab selected
  const tabStyle = (index) => {
    if (index === currentTabIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab";
    }
  }

  const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
  }

  // Using both inline style and css to demonstrate both usage syntax
  return (
    <div style={{ margin: "auto", width: "85%", textAlign: "left"}}>

      {/* we do not actually need to use content, but it MUST be there so we can get the index */}
      {
        allTabs.map((item, index) => (
          <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setSelectedTab(index) }>
            { item.label }
          </div>
        ))
      }
    </div>
  )
}

export default MyTabs;