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
                        <div className="LeftBox">
                            <h1 style={{textAlign:"start", color:"black", fontSize:"30px", fontWeight:"800"}}>Pokémon GO</h1>
                            <p style={{textAlign:"start", fontSize:"20px"}}>
                                <span style={{float:" left", fontSize:" 550%", fontWeight: 700, lineHeight:"80%", color:"#30a7d7", margin:"0px 5px -5px 0px"}}>T</span>
                                ravel between the real world and the virtual world of Pokémon with Pokémon GO for iPhone and Android devices. With Pokémon GO, you'll discover Pokémon in a whole new world—your own! Pokémon GO gives you the chance to explore real locations and search far and wide for Pokémon. More and more Pokémon continue to appear around the globe, including rare and powerful Legendary Pokémon.
                            </p>
                            <img src="https://assets.pokemon.com//assets/cms2/img/video-games/video-games/pokemon_go/inline/inline-01.jpg" alt="screenshot1" />
                            <p style={{textAlign:"start", fontSize:"20px"}}>
                                As you move around the places where you live and visit, your smartphone can vibrate to let you know when you're near a Pokémon. Once you've encountered a Pokémon, take aim on your smartphone's touch screen and throw a Poké Ball to catch it—but be careful, or it might run away! Also look for PokéStops located at interesting places—such as public art installations, historical markers, and monuments—where you can collect more Poké Balls and other items.
                            </p><br />
                            <h1 style={{textAlign:"start", color:"black", fontSize:"30px", fontWeight:"800"}}>Battle Other Trainers</h1>
                            <hr style={{border:"2px solid #30A7D7"}} />
                            <img src="https://assets.pokemon.com//assets/cms2/img/video-games/video-games/pokemon_go/inline/inline-08-en.png" alt="screen2" />
                            <p style={{textAlign:"start", fontSize:"20px"}}>
                                <span style={{float:" left", fontSize:" 550%", fontWeight: 700, lineHeight:"80%", color:"#30a7d7", margin:"0px 5px -5px 0px"}}>A</span>
                                re you ready for an exciting challenge? You can now take on another Trainer at any time in Pokémon GO. With Trainer Battles, you can match up against another Trainer by using a Battle Code, then face off using a team of three Pokémon. When the battle is over, both participants receive great rewards, including a chance at rare Evolution items.

                                The fast-paced battles take place in real time, and your Pokémon can use both their Fast Attacks and Charged Attacks. Just keep an eye on your opponent's attacks, and deploy a Protect Shield to save your Pokémon from taking critical damage. Be careful, though—you only have a limited number of Protect Shields before your Pokémon will be left defenseless against big attacks.

                                Your opponent will usually have to be nearby for you to initiate a Trainer Battle. But you can challenge Trainers you're Ultra Friends or Best Friends with from any distance. Good luck, Trainers!
                            </p><br />
                            <h1 style={{textAlign:"start", color:"black", fontSize:"30px", fontWeight:"800"}}>Make Friends, Exchange Gifts, and Trade Pokémon</h1>
                            <hr style={{border:"2px solid #30A7D7"}} />
                            <p style={{textAlign:"start", fontSize:"20px"}}>
                                <span style={{float:" left", fontSize:" 550%", fontWeight: 700, lineHeight:"80%", color:"#30a7d7", margin:"0px 5px -5px 0px"}}>G</span>
                                et connected with your real-life friends in Pokémon GO, and you can interact with them in a variety of exciting ways. After exchanging Trainer Codes, you will see your friends on your Friend List.

                                One way that you'll be able to play with your friends in Pokémon GO is by giving Gifts. When you spin a Photo Disc at a PokéStop or Gym, you have a chance of collecting a special Gift. Although you can't open these Gifts yourself, you can send them to someone on your Friend List. The Gifts contain a variety of helpful items (and occasionally special Eggs) and come with a postcard showing where the Gift was collected.

                                You can increase your Friendship level with others by sending Gifts or participating in a Raid or Gym Battle with them. As your Friendship level rises, bonuses can be unlocked.
                            </p>
                            <img src="https://assets.pokemon.com//assets/cms2/img/video-games/video-games/pokemon_go/inline/inline-05.jpg" alt="screen3" />
                            <p style={{textAlign:"start", fontSize:"20px"}}>There's another way to build your Friendship level, and that's by trading Pokémon! If you are near a friend and have a Trainer level of 10 or higher, you can trade Pokémon with them. Completing a trade requires Stardust, but it earns a bonus Candy for the Pokémon you traded away, and that bonus increases if the Pokémon the two of you trade were caught in locations far apart from each other.

                            Each Pokémon in the trade might become a Lucky Pokémon—you'll know right away by a new sparkly appearance. These Lucky Pokémon require less Stardust to power up, too. And Lucky Pokémon can be detected by the Pokédex so you can keep track of them. The longer the Pokémon have spent in storage, the higher the chance that they will become Lucky Pokémon when they're traded.
                            </p><br />
                            <h1 style={{textAlign:"start", color:"black", fontSize:"30px", fontWeight:"800"}}>Customize Your Trainer</h1>
                            <hr style={{border:"2px solid #30A7D7"}} />
                            <p style={{textAlign:"start", fontSize:"20px"}}>
                                <span style={{float:" left", fontSize:" 550%", fontWeight: 700, lineHeight:"80%", color:"#30a7d7", margin:"0px 5px -5px 0px"}}>W</span>
                                hen you first play Pokémon GO, you'll get to customize your Trainer, choosing apparel and accessories to give them a cool look. Your customized Trainer will appear as you move around on the map and on your profile page. Other players will also see your Trainer when they visit a Gym you control or when you interact as friends (see below).
                            </p> <br />
                            <h1 style={{textAlign:"start", color:"black", fontSize:"30px", fontWeight:"800"}}>Add To Your Pokédex</h1>
                            <hr style={{border:"2px solid #30A7D7"}} />
                            <p style={{textAlign:"start", fontSize:"20px"}}>
                                <span style={{float:" left", fontSize:" 550%", fontWeight: 700, lineHeight:"80%", color:"#30a7d7", margin:"0px 5px -5px 0px"}}>I</span>
                                n Pokémon GO, you will gain levels as a Trainer. At higher levels, you'll be able to catch more powerful Pokémon to complete your Pokédex. You'll also have access to stronger items to heal your Pokémon after battle, improved Poké Balls to give you a better shot at catching Pokémon, and useful Berries. Keep exploring and catching Pokémon to raise your level.

                                There are other ways to add Pokémon to your Pokédex. If you catch the same species of Pokémon enough times, you may be able to evolve it! And you may find Pokémon Eggs at PokéStops, which will hatch once you've walked a certain distance with it in an incubator—perhaps resulting in a Pokémon you've never seen before!

                                As you're out exploring, keep an eye on the real-world weather, as it will influence which Pokémon you're likely to discover. For example, Water-type Pokémon will be more plentiful during rainy weather.
                            </p> <br />

                        
                        
                        
                        
                        
                        </div>



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
                    <div className="mobile-only" id="SplitBox" style={{flexDirection:"column", width:"89%"}}>
                        <div style={{margin:"0 auto", width: "80%"}}>"LEFT BOX"</div>
                        <div style={{margin:"0 auto",width:"100%", padding:"2%"}}>
                            <div style={{margin:"0 auto",width:"80%", marginTop:"3%", padding:"3%",backgroundColor:"silver", borderRadius:"10px"}}>
                                <img src="https://assets.pokemon.com/assets//cms2/img/video-games/video-games/pokemon_go/app_store_badge_us_135x40.jpg" alt="appStore" />
                                <div style={{margin:"0 auto",width:"100%"}}>
                                    <p style={{textAlign:"start",fontSize:"12px" }}>Release Date: July 6, 2016</p>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Genre: Real World Adventures</p>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Platform: iPhone</p>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Players: Single Player or Multiplayer</p>
                                </div>
                            </div>
                            <div style={{margin:"0 auto",width:"80%", marginTop:"5%", padding:"3%",backgroundColor:"silver", borderRadius:"10px"}}>
                                <img src="https://assets.pokemon.com/assets//cms2/img/misc/icons/google-play-en.jpg" alt="googlePlay" />
                                <div style={{margin:"0 auto",width:"50%"}}>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Platform: iPhone</p>
                                    <p style={{textAlign:"start",fontSize:"12px"}}>Players: Single Player or Multiplayer</p>
                                </div>
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