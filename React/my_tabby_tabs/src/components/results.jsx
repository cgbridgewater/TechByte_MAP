import React from 'react';

const MyResults = (props) => {
  const { allTabs, currentTabIndex } = props;

  return (
    <div className="results">
      { allTabs[currentTabIndex].content }
    </div>
  )
}

export default MyResults;