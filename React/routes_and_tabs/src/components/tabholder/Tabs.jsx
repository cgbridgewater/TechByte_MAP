import React, { useEffect, useState, useRef } from 'react';
import { TabSlider } from "./styles";

const Tabs = ({selectedTab, onChange, children}) => {

    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }, [containerRef])
    
    const sliderWidth = containerWidth / children.length;
    
    const tabs = children.map((child) => {
        const handleClick= (e) => {
            onChange(e, child.props.value);
        }
        return React.cloneElement(child, {
            key: child.props.value,
            active: child.props.value === selectedTab,
            onClick: handleClick
        });
    });

    return (
        <div className='TabHeaderContainer'  ref={containerRef}>
            <div className='TabsHolder'>{tabs}</div>
            <TabSlider width={sliderWidth} index={selectedTab} />
        </div>
    );
};

export default Tabs