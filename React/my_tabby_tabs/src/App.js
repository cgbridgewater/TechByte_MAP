import './App.css';
import React, {useState} from 'react';
import MyTabs from './components/tabs';
import MyResults from './components/results';

function App() {
  // create an array of items that will have a label and a content property.
  const tabsArray = [
    { label: "Piggy 1", content: "This little piggy went to market" },
    { label: "Piggy 2", content: "This little piggy stayed home" },
    { label: "Piggy 3", content: "This little piggy had roast beef" },
    { label: "Piggy 4", content: "This little piggy had none" },
    { label: "Piggy 5", content: "This little piggy went ...  Wee, wee, wee...  all the way home!" },
  ];

  // create state that can hold our array of items
  //    technically we will never use setAllTabs since it is set when we initialize it
  //    and we do not need to ever change it
  const [ allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">
      {/* When the line gets really long, you can break it out over multiple lines */}
      {/*   to make it more readable */}
      <MyTabs 
        allTabs={ allTabs } 
        currentTabIndex={ currentTabIndex }
        setCurrentTabIndex={ setCurrentTabIndex } 
      />
      <MyResults allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
    </div>
  );
}

export default App;