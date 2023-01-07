import React, { useEffect, useState, useRef } from 'react';

import {
    TabHeaderContainer,
    StylizedTab,
    StylizedTabPanel,
    TabsHolder,
    inactiveTab,
    TabSlider
} from "./styles";


const Tab = ({label, active, onClick}) => {

    return (
    <StylizedTab 
        role= "tab"
        active= {active}
        onClick= {onClick}
        inactiveStyle = {inactiveTab}
    >
        {label}
    </StylizedTab>
        );
};


export default Tab