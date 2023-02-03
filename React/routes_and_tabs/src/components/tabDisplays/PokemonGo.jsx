import React, {useState} from "react";


const PokemonGo = () => {


        return (
                <div style={{minHeight:"64vh"}} className="Container">
                    <div className="VideoBox">
                        <iframe className="desktop-only" width="700" height="395" src="https://www.youtube.com/embed/SWtDeeXtMZM" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe className="mobile-only" width="320" height="180" src="https://www.youtube.com/embed/SWtDeeXtMZM" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    {/* section 1 DESKTOP VIEW*/}
                    <div className="desktop-only" id="SplitBox">
                        <div className="LeftBox">test1</div>
                        <div className="RightBox" style={{}}>
                            <div style={{width:"55%", padding:"3%",backgroundColor:"silver", borderRadius:"10px"}}>
                                <img style={{width:"100%",height:"auto"}} src="https://assets.pokemon.com/assets//cms2/img/video-games/video-games/pokemon_go/app_store_badge_us_135x40.jpg" alt="appStore" />
                                <div style={{margin:"0 auto",width:"95%"}}>
                                    <p style={{textAlign:"start",fontSize:"12px" }}>Release Date:  July 6, 2016</p>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Genre: Real World Adventures</p>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Platform: iPhone</p>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Players: Single Player or Multiplayer</p>
                                </div>
                            </div>    
                            <div style={{width:"55%", marginTop:"3%", padding:"3%",backgroundColor:"silver", borderRadius:"10px"}}>
                                <img style={{width:"100%",height:"auto"}} src="https://assets.pokemon.com/assets//cms2/img/misc/icons/google-play-en.jpg" alt="googlePlay" />
                                <div style={{margin:"0 auto",width:"95%"}}>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Release Date: July 6, 2016</p>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Platform: Andriod devices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section 1 MOBILE VIEW */}
                    <div className="mobile-only" id="SplitBox" style={{flexDirection:"column"}}>
                        <div style={{margin:"0 auto", width: "80%"}}>test1</div>
                        <div style={{margin:"0 auto",width:"80%", backgroundColor:"silver", padding:"2%"}}>
                            <img src="https://assets.pokemon.com/assets//cms2/img/video-games/video-games/pokemon_go/app_store_badge_us_135x40.jpg" alt="appStore" />
                            <div style={{margin:"0 auto",width:"50%"}}>
                                <p style={{textAlign:"start",fontSize:"12px" }}>Release Date: July 6, 2016</p>
                                <p style={{textAlign:"start",fontSize:"12px"}}>Genre: Real World Adventures</p>
                                <p style={{textAlign:"start",fontSize:"12px"}}>Platform: iPhone</p>
                                <p style={{textAlign:"start",fontSize:"12px"}}>Players: Single Player or Multiplayer</p>
                            </div>
                            <img src="https://assets.pokemon.com/assets//cms2/img/misc/icons/google-play-en.jpg" alt="googlePlay" />
                            <div style={{margin:"0 auto",width:"50%"}}>
                                <p style={{textAlign:"start",fontSize:"12px"}}>Platform: iPhone</p>
                                <p style={{textAlign:"start",fontSize:"12px"}}>Players: Single Player or Multiplayer</p>
                            </div>
                        </div>
                    </div>
                        
                    {/* section 2 */}
                    <div  className=""  style={{display:'flex', height:"75vh", justifyContent:"space-between"}}>

                    </div>
                    {/* section 3 */}
                    <div >


                    </div>
                    <div >


                    </div>
                </div>
        );
};

export default PokemonGo