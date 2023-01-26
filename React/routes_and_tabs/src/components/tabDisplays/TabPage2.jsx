import React, {useState} from "react";


const SleepingPichu = () => {

        const [shake, setShake] = useState(false);
        const [clicked , setclicked] = useState(false)
        const animate = () => {
                // Button begins to shake
                setShake(true);
                setclicked(true)
                // Button stops shake after 2 seconds
                setTimeout(() => setclicked(false),4300);
                setTimeout(() => setShake(false),2000);
        }

        return (
                <div style={{minHeight:"650px"}} className="Container">
                        <button id="ShakingButton" onClick={animate} className={shake ? `shake` : null}>Wake Up Pichu!</button>
                        { clicked?
                                <div>
                                        <h4>Pichu says:</h4>
                                        <h1>"I'm Sleepy, Go AWAY"</h1>
                                        <img style={{marginTop:"-150px"}} className="Pika" src="https://i.pinimg.com/originals/5a/c0/f4/5ac0f4d991159670000f0eeb1136e3cb.gif" alt="sleepingpikachu"/>
                                </div>
                                :
                                null                
                        }       
                </div>
        );
};

export default SleepingPichu