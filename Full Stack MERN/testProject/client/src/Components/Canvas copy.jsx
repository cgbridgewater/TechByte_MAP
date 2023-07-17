import { useState } from "react";

const Canvas = () => {

    const [logoName, setLogoName] = useState("Beats")
    const [count, setCount] = useState(-1)
    const [isDisabled, setIsDisabled] = useState(false)
    const LOGO = require(`../Assets/Images/${logoName}.png`);

    window.onload = function () {
        // initialize count
        counter(count);
        // Definitions
        var canvas = document.getElementById("paint-canvas");
        var context = canvas.getContext("2d");
        var boundings = canvas.getBoundingClientRect();

        // Specifications
        var mouseX = 0;
        var mouseY = 0;
        context.strokeStyle = 'black'; // initial brush color
        context.lineWidth = 9; // initial brush width
        var isDrawing = false;

        // Handle Colors
        var colors = document.getElementsByClassName('colors')[0];
        colors.addEventListener('click', function(event) {
            context.strokeStyle = event.target.value || 'black';
        });

        // Handle Brushes
        var brushes = document.getElementsByClassName('brushes')[0];
        brushes.addEventListener('click', function(event) {
            context.lineWidth = event.target.value || 9;
        });

        // Mouse Down Event
        canvas.addEventListener('mousedown', function(event) {
            setMouseCoordinates(event);
            isDrawing = true;
        // Start Drawing
            context.beginPath();
            context.moveTo(mouseX, mouseY);
        });

        // Mouse Move Event
        canvas.addEventListener('mousemove', function(event) {
            setMouseCoordinates(event);
            if(isDrawing){
            context.lineTo(mouseX, mouseY);
            context.stroke();
            }
        });

        // Mouse Up Event
        canvas.addEventListener('mouseup', function(event) {
            setMouseCoordinates(event);
            isDrawing = false;
        });


        // Handle Mouse Coordinates
        function setMouseCoordinates(event) {
            mouseX = event.clientX - boundings.left ;
            mouseY = event.clientY - boundings.top ;
        }

        
        // Handle Clear Button
        var clearButton = document.getElementById('clear');
        clearButton.addEventListener('click', function() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        });

        // Handle Next Button
        var nextButton = document.getElementById('next');
        nextButton.addEventListener('click', function() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        });
        

    };


    


    
    // Count and Image Switch Case Loop
    function counter(count){
        let name=''
        count++
        if(count > 19){
            count=0;
            name = "Apple"
            setCount(count)
            setLogoName(name)
            return name
        }
            switch(count) {
            case 1 :
                name = "Tesla"
                break;
            case 2 :
                name = "Amazon"
                break;
            case 3 :
                name = "McDonalds"
                break;
            case 4 :
                name = "Baskin-Robbins"
                break;
            case 5 :
                name = "Volkswagen"
                break;
            case 6 :
                name = "Mercedes-Benz"
                break;
            case 7 :
                name = "Visa"
                break;
            case 8 :
                name = "PayPal"
                break;
            case 9 :
                name = "Nike"
                break;
            case 10 :
                name = "Target"
                break;
            case 11 :
                name = "Adidas"
                break;
            case 12 :
                name = "Vans"
                break;
            case 13 :
                name = "Beats"
                break;
            case 14 :
                name = "BMW"
                break;
            case 15 :
                name = "FedEx"
                break;
            case 16 :
                name = "Audi"
                break;
            case 17 :
                name = "Google"
                break;
            case 18 :
                name = "Dell"
                break;
            case 19 :
                name = "Nasa"
                break;
            default:
                name = "Apple"
        }
        // console.log("Count :", count);
        setCount(count)
        setLogoName(name)
        return name
    }

    return(    
        <main className="canvas-container">
            {/* top bar div */}
            <div className="buttons">
                <button disabled={isDisabled} id="clear" type="button">CLEAR</button>
                <h3 className="image-title">Draw The <span className="image-name">{logoName}</span> Logo </h3>
                <a id="next" onClick={(e) =>{counter(count); setIsDisabled(false)}} href="#next" className="modal-close" title="Close Modal">NEXT ➡️</a>
            </div>
            {/* canvas div */}
            <div className="canvas-block">
                <canvas id="paint-canvas" width="640" height="400"></canvas>
            </div>
            {/* bottom div */}
            <div className="brush-block">
                {/* brush color */}
                <div className="colors">
                    <button type="button" value="#0000ff"/>
                    <button type="button" value="#009fff"/>
                    <button type="button" value="#0fffff"/>
                    <button type="button" value="#bfffff"/>
                    <button type="button" value="#000000"/>
                    <button type="button" value="#333333"/>
                    <button type="button" value="#666666"/>
                    <button type="button" value="#999999"/>
                    <button type="button" value="#ffcc66"/>
                    <button type="button" value="#ffcc00"/>
                    <button type="button" value="#ffff00"/>
                    <button type="button" value="#ffff99"/>
                    <button type="button" value="#003300"/>
                    <button type="button" value="#555000"/>
                    <button type="button" value="#00ff00"/>
                    <button type="button" value="#99ff99"/>
                    <button type="button" value="#f00000"/>
                    <button type="button" value="#ff6600"/>
                    <button type="button" value="#ff9933"/>
                    <button type="button" value="#f5deb3"/>
                    <button type="button" value="#330000"/>
                    <button type="button" value="#663300"/>
                    <button type="button" value="#cc6600"/>
                    <button type="button" value="#deb887"/>
                    <button type="button" value="#aa0fff"/>
                    <button type="button" value="#cc66cc"/>
                    <button type="button" value="#ff66ff"/>
                    <button type="button" value="#ff99ff"/>
                    <button type="button" value="#e8c4e8"/>
                    <button type="button" value="#ffffff"/>
                    <button type="button" value="#C2E7D9"/>
                </div>
                {/* logo reveal button and image */}
                <div className="logo-container" >
                    <div className="wrap">
                        <a onClick={(e) => setIsDisabled(true)} href="#show" className="modal-open">CLICK TO REVEAL</a>
                        <div className="overlay" id="show">
                            <div className="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400">
                                    <line id="svg_3" fill="none" stroke="#000000" strokeWidth="2" x1="2.0" y1="2.0" x2="398" y2="2.0"/>
                                    <line id="svg_2" fill="none" stroke="#000000" strokeWidth="2" x1="398" y1="398" x2="2.0" y2="398"/>
                                    <line id="svg_4" fill="none" stroke="#000000" strokeWidth="2" x1="398" y1="398" x2="398" y2="2.0"/>
                                    <line id="svg_5" fill="none" stroke="#000000" strokeWidth="2" x1="2.0" y1="2.0" x2="2.0" y2="398"/>
                                </svg>
                                {/* pop up modal solution image */}
                                <div className="modal-inner">
                                    <div className="modal-flex">
                                        <h3 className="image-title">{logoName}</h3>
                                    </div>
                                    <img className="image-block" src={LOGO} alt={logoName} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* brush */}
                <div className="brushes">
                    <button type="button" value="3"/>
                    <button type="button" value="9"/>
                    <button type="button" value="15"/>
                </div>
            </div>
        </main>
    )
}
export default Canvas