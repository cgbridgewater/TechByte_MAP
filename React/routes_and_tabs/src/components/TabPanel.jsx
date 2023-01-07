import React, { useEffect, useState, useRef } from 'react';

import {
    TabHeaderContainer,
    StylizedTab,
    StylizedTabPanel,
    TabsHolder,
    inactiveTab,
    TabSlider
} from "./styles";

const TabPanel = ({children, value, selectedIndex}) => {

    const hidden = value !== selectedIndex;

    return (
        <StylizedTabPanel hidden={hidden} active={!hidden}>
            {children}
        </StylizedTabPanel>
    );
};


export default TabPanel