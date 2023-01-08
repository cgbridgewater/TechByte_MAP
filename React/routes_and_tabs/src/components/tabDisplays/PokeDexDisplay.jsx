// import { Link, useParams } from 'react-router-dom';
// // import axios from "axios";
// import React, { useEffect, useState } from "react";


// const PokeDexDisplay = (props) => {
    
//     // const { input } = useParams();
//     const [ axiosName, setAxiosName] = useState("")
//     const [ error2, setError2] = useState("")
//     const [ isError, setIsError] = useState(false)
    



//     if(!isError){
//     return(
//     <div>
//         <div style={{textAlign:"left"}} className='Result'>
//             <h1 style={{textAlign:"center", paddingTop:"20px", marginBottom:0, color:"yellow"}}> Pokemon Search Results</h1>

//             <hr />
//             {/* <p style={{marginLeft:"30%", color:"yellow"}}>
//                 ID:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName.id} 
//                 <br />
//                 Name:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName.name} 
//                 <br />
//                 Weight:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName.weight} 
//                 <br />
//                 Height:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName.height} 
//                 <br />
//                 Species:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName.species.name} 
//                 <br />
//                 Base Experience:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {axiosName.base_experience} 
//                 <br />
//                 <img src={axiosName.sprites.other.home.front_default} alt="" />
//             </p> */}
//         </div>

//             <hr />
//             <div style={{display:"flex", justifyContent:"space-evenly"}}>
//                 <Link to={"/"}>Search Again</Link>
//             </div>

//     </div>
//     )
//     } 
    
//     else {
//     return(
//         <div >
//                 i'm here{/* remove after testing!! */}
//                 <img style={{ borderRadius:"20px",marginTop:"15%"}} alt="" src={error2}/>
//             </div>
//     )
//     }
// };

// export default PokeDexDisplay;