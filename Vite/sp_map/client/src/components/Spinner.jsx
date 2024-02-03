import SpinnerOutter from "../assets/spinner_outter.png"
import SpinnerInner from "../assets/spinner_inner.png"

const Spinner = () => {

    return(
        <div className="SpinnerBackground">
            <img className="Spinner" src={SpinnerOutter} alt="Key spinner" />
            <img className="Center" src={SpinnerInner} alt="Key spinner" />
        </div>
    )
}

export default Spinner;