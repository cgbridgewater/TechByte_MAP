
const Modal = () => {

    return(    
        <div className="modalWrap">
        <a onClick={(e) => setIsDisabled(true)} href="#show" className="modalOpen">CLICK TO ME!</a>
        <div className="modalOverlay" id="modalShow">
            <div className="modalContainer">
                {/* svg boarder effect */}
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400">
                    <line id="svg_3" fill="none" stroke="#000000" strokeWidth="2" x1="2.0" y1="2.0" x2="398" y2="2.0"/>
                    <line id="svg_2" fill="none" stroke="#000000" strokeWidth="2" x1="398" y1="398" x2="2.0" y2="398"/>
                    <line id="svg_4" fill="none" stroke="#000000" strokeWidth="2" x1="398" y1="398" x2="398" y2="2.0"/>
                    <line id="svg_5" fill="none" stroke="#000000" strokeWidth="2" x1="2.0" y1="2.0" x2="2.0" y2="398"/>
                </svg>
                {/* pop up modal solution image */}
                <div className="modalInner">
                    <div className="modalTitleFlex">
                        <h3 className="modalTitle">{logoName}</h3>
                    </div>
                    {/* <img className="modalImage" /> */}
                    <p className="modalContent"></p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Modal