import styled, {css, keyframes} from "styled-components";


export const StylizedTab = styled.button`
    ${(p) => 
        p.active  && css `
        color: yellow;
        font-weight: bold;
        animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
    ${(p) => !p.active && p.inactiveStyle} 
`;

const inset = keyframes`
    0% {
    -webkit-box-shadow: inset 0 0 0 0 yellow;
            box-shadow: inset 0 0 0 0 yellow;
    }
    100% {
    -webkit-box-shadow: inset 0 0 14px 0px yellow;
            box-shadow: inset 0 0 14px 0px yellow;
    }
`;

export const StylizedTabPanel = styled.div`
    display: ${(p) => (p.active ? "flex" : "none")};
    isolation:isolate;
    font-size: 4rem;
    background: #393e46;
    flex-direction: column;
    width: 100%;
    // height: 400vh;
`;


export const inactiveTab = {
    opacity: 0.65
}


export const TabSlider = styled.div`
    width: 20%;
    height: 4px;
    background-color: Yellow;
    transition: .5s;
    transform: ${(props) => `translateX(${props.width * (props.index-1)}px)`};
`;

