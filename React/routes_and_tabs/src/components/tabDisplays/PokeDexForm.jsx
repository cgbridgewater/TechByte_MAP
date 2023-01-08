// import { useState } from 'react';
// import axios from "axios";


// const PokeDexForm = (props) => {

//     const [shake, setShake] = useState(false);

//     const animate = () => {
//             // Button begins to shake
//             setShake(true);

//             // Button stops shake after 2 seconds
//             setTimeout(() => setShake(false),2000);
//     }

//     const pokedexLogo = require('./images/pokedex.png')
//     const [ input , setInput ] = useState([]);
//     const [ errors, setErrors ] = useState([]);
//     const [ axiosName, setAxiosName] = useState(null)



//     const [ error2, setError2] = useState("")
//     const [ isError, setIsError] = useState(false)
    
    
//     const sendSurvey = (e) => {
//         e.preventDefault();   // prevent page refresh
//         const errorList = [];  // store array of errors if they exist
//         if (input.length === 0 ) { 
//             errorList.push("Please give an input!")
//         }
//         if (errorList.length > 0) {
//             setErrors(errorList);
//         } else { // if all validations pass run the rest
//             // When the user clicks the submit input in the form, this will navigate to the "/results" path
//             // navigate(`/pokemon/${input}`);
                
//             setErrors([]);
//             axios
//             .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
//             .then(res => {
//                 setError2("");
//                 setIsError(false)
//                 console.log("fetch single pokemon",res.data);
//                 setAxiosName(res.data);
//             })    
//             .catch((err) => 
//             console.log("HELLLLLOOOOO",err),
//             setError2("https://thumbs.gfycat.com/LightShabbyLamprey-size_restricted.gif"),
//             setIsError(true)
//             );
//         }}


// return (


//     <div>

//             {/* pokedex logo */}
//                 <img src={pokedexLogo} alt="pokedex logo" />
//             <hr className='PokedexHr' />

//         <main>


//             {/* map and display errors if they exist */}
//             {errors.map((err, i) => (
//                 <p className='Error' class_id="ErrorText" key={i}>
//                     {err}
//                 </p>
//             ))}

//             {/* form to collect data */}
//                 <form className='Form' onSubmit = { sendSurvey }>
//                 {/* input for search */}
//                     <label>Search by name or number:</label>
//                     <input className='FormInput' class_id='Input'
//                     type="text"  
//                     onChange={ (e) => 
//                         setInput(e.target.value) } 
//                     value={ input }
//                     />

//                 {/* form submit button */}
                
//                 <button 
//                 id="ShakingButton" 
//                 onClick={animate} 
//                 className={shake ? `shake` : null} 
//                 type="submit"
//                 value="Submit!"
//                 >Submit!</button>

//                     {/* <input style={{marginLeft:"10px"}} className="FormButton" class_id='Button'
//                     type="submit"
//                     value="Submit!"
//                     /> */}
//                 </form>

//             {/* <button className='RandomPick'>Pick One For Me!!</button> */}
//         </main>
//         <hr />


//         <div className='spinnerContainer'>
//                         <div>
//                             <img className="Spinner" src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png" alt="" />
//                         </div>


//                 { axiosName?
//                 <div className='ResultShell'>
//                             <div className='ID'>
//                                 <h1 style={{color:"yellow", fontSize:"50px"}}>
//                                     {axiosName.id} 
//                                 </h1>
//                             </div>
//                     <div className='Results'>
//                         <p className='Result'>
//                             <br />
//                             Weight:  &nbsp;&nbsp;&nbsp;&nbsp; {(axiosName.weight*0.1).toFixed(1)}kg 
//                             <br />
//                             Height:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {(axiosName.height*0.1).toFixed(1)}m 
//                             <br />
//                             Type:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {(axiosName.types[0].type.name).toUpperCase()} 
//                             <br />
//                             Species:  &nbsp;&nbsp;&nbsp; {(axiosName.species.name).toUpperCase()} 
//                         </p>
//                         <div>
//                             <img className='ResultImage' src={axiosName.sprites.other.home.front_default} alt="" />
//                         </div>
//                         <div className='Name'> 
//                             <h1 style={{color:"yellow", fontSize:"50px"}}>
//                                 {(axiosName.name).toUpperCase()} 
//                             </h1>
//                         </div>
//                     </div>
//                 </div>    
//                 :    
//                 null}

//         </div>


//         <img className="Pika" src="https://corporate.pokemon.com/char-pikachu-57d9f7946973b66cc4351807500acb15.png" alt="" />

//     </div>
//     );
// }

// export default PokeDexForm;

            
