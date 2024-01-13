import origin from "./images/originStory.jpg"
import TypingText from "./typingText";

const Header = () => {

    return(
        <nav>
            <img className="NavTitle" src={origin} alt="Origin Story Title" />
            <h1 className="TitleOf">OF</h1>
            <h1 className="TitleName">CHRIS BRIDGEWATER</h1>
            <TypingText/>
            <h1 className="FullStack">FULL STACK</h1>
        </nav>
    )
}

export default Header;