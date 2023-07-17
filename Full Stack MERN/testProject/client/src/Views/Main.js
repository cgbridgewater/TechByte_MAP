import Canvas from "../Components/Canvas";
import Title from "../Components/Title";
import '../Style/Canvas.css'
import '../Style/Logo.css'
import '../Style/Title.css'


const Main = () => {

    
    return(
        <div className="mainContainer">
            <Title/>
            <div className="flex" >
                <Canvas/>
            </div>
        </div>
    )
}

export default Main;