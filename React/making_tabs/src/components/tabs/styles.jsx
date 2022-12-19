import styled, {css, keyframes} from "styled-components";

export const TabHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StylizedTab = styled.button`
    color: #fff;
    width: 100%;
    padding: 20px 0px;
    font-size: 1.25rem;
    background-color: transparent;
    border:none;
    cursor: ${(p) => (p.disabled ? "default" : "pointer")};
    ${(p) => 
        p.active  && css `
        color: #00adb5;
        font-weight: bold;
        animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
    ${(p) => !p.active && p.inactiveStyle} 
`;

export const StylizedTabPanel = styled.div`
    display: ${(p) => (p.active ? "flex" : "none")};
    font-size: 4rem;
    background: #393e46;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
`;

export const TabsHolder = styled.div`
    display: flex;
    /* activate flex below to stack tabs into a vertical column!*/
    /* flex-direction:column;*/
`;

export const inactiveTab = {
    opacity: 0.65
}

// width: ${(props) => `33.5%`};

export const TabSlider = styled.div`
    width: ${(props) => ` ${props.width}px`};
    height: 4px;
    background-color: #00adb5;
    transition: .7s;
    transform: ${(props) => `translateX(${props.width * (props.index-1)}px)`};
`;

const inset = keyframes`
    0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(0, 173, 181, 0);
            box-shadow: inset 0 0 0 0 rgba(0, 173, 181, 0);
    }
    100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 173, 181, 5);
            box-shadow: inset 0 0 14px 0px rgba(0, 173, 181, 5);
    }
`;