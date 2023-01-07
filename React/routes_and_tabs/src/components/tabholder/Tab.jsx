import { inactiveTab, StylizedTab } from "./styles";

const Tab = ({label, active, onClick}) => {

    return (
    <StylizedTab className='StylizedTab' 
        role= "tab"
        active= {active}
        onClick= {onClick}
        inactiveStyle = {inactiveTab}
    >
        {label}
    </StylizedTab >
        );
};

export default Tab