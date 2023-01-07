import { StylizedTabPanel } from "./styles";

const TabPanel = ({children, value, selectedIndex}) => {

    const hidden = value !== selectedIndex;

    return (
        <StylizedTabPanel className='TabPanel' hidden={hidden} active={!hidden} >
            {children}
        </StylizedTabPanel>
    );
};


export default TabPanel