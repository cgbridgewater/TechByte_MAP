import React, {useState} from "react";


const PokemonGo = () => {


        return (
                <div style={{minHeight:"64vh"}} className="Container">
                    {/* section 1 */}
                    <div className="InnerBox" >
                        <div style={{display:"flex", justifyContent:"end",width:"30%"}}>
                            <img style={{height:"50%", width:"30%"}} src="https://lh3.googleusercontent.com/6Mht5q867Kt0SMUZ2wJlMwqRfLeSJSgiSAUCsTdSFwAEjNKEE5GBdlXhlqDrk70k1QDCWjOCQAi5Kf1RCffNWI4mvPogrMZVgA1Eb3Awjt8lrbY=e365-w800" alt="1" />
                        </div>
                        <div style={{width:"20%"}}>
                            <h1 style={{color:"black", textAlign:"start", flexGrow:"1"}}>
                                New Trainer?
                            </h1>
                            <h3 style={{color:"black", fontSize:"14px", textAlign:"start"}}>
                            Follow this simple guide on getting started with Pokémon GO!
                            </h3>
                        </div>
                        <div>
                            <img style={{height:"80%"}} src="https://lh3.googleusercontent.com/9FHOk79iiGEisBJxkU9smRi8CUKagEkt_yl7T7z9mEBHypSg5sblsGkv1YOxj-4vCpVbYUeo7dC6q2rxiHn9fNlcBxXGabLd7RpsNC6MHrwCRw=rw-e365-w1440" alt="pokes" />
                        </div>
                    </div>
                    {/* section 2 */}
                    <div  className="ContentGo"  style={{display:'flex', height:"75vh", justifyContent:"space-between"}}>
                        <div style={{width:"50%"}}  >
                            <div style={{display:'flex', marginTop:"20%", marginLeft:"20%"}} >
                                <div>
                                    <img style={{height:"100px",}} src="https://lh3.googleusercontent.com/MxqAAjte5yQsQD0cC73SBVJuH6kX9F-fQ1X97VecyhGHGpixcT1ce7OftVuDufTSVIG_gY233437bOmw1AZFpg1Har4t5sP1jDo4GAX_so38dg=e365-w261" alt="" />
                                </div>
                                <div style={{marginLeft:"20px"}}>
                                    <h1 style={{fontSize:"50%"}}>Catch Pokémon</h1>
                                    <h2 style={{fontSize:"35%"}}>Find your buddy!</h2>
                                </div>
                            </div>
                            <div>
                                <h4 style={{fontSize:"16px"}}>Catching Pokémon is one way to collect them! You can also collect them by hatching Eggs and trading with other Trainers.</h4>
                            </div>
                        </div>
                        <div>
                            <img style={{width:"100%", height:"77vh"}} src="https://lh3.googleusercontent.com/RGShDyVofSODXIJ0eQ9umAID8tCw9KdqBFrtgCEdrxjJijG1qZBryfECP9IRV1MOJhCk4Za4VYB34DE-hnPesZNNVYMwgHKs9KrNue3LNJRJuw=rw-e365-w1440" alt="catch" />
                        </div>
                    </div>
                    {/* section 3 */}
                    <div >
                        <img style={{margin:"0 auto", width:"90%"}} src="https://lh3.googleusercontent.com/Hxrm0FEgRutcRL2mhNnpHdwDLPjlXnGMotdtlzRxwtLXK2hDbhgmA_gDFRkpeYJvrC5xrkB52NM4RQrloB-Ob7IgKTpFzciYkjwTnc36HEu_XSM=rw-e365-w1440" alt="" />
                    </div>
                    <div >
                        <img style={{margin:"0 auto",marginTop:"-1%", width:"90%"}}  src="https://lh3.googleusercontent.com/d3MUt9qnSpEQTo_yOpwf9wefXSrAbGeFT1uo69kPu0piUpx3dt7k99rRpaMZAM3rV-MwVSZe8sGuPHmFKnmwP-2S2jE8KnJnvXo2-MsaMa2B-hI=rw-e365-w1440" alt="" />                    
                    </div>
                </div>
        );
};

export default PokemonGo