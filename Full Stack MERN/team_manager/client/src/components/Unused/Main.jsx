// import React, { useEffect, useState} from "react";
// import axios from "axios";
// import PersonForm from "../components/PlayerForm";
// import PersonList from "../components/PlayerList";

// const Main = () => {
//     const [ischanged, setIsChanged] = useState(false)
//     const [ person, setPerson ] = useState([]);
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/player')
//             .then(res => {
//                 setPerson(res.data)
//             })
//             .catch((err) => console.log(err))
//     },[])


//     const removeFromDom = personId => {
//         axios.delete("http://localhost:8000/api/player/" + personId)
//             .then((res) => {
//                 console.log(res);
//                 console.log(res.data);
//                 setPerson(person.filter(person => person._id !== personId));
//             })
//             .catch((err) => console.log(err))
//     }

//     const createPerson = personParam => {
//         axios.post("http://localhost:8000/api/player", personParam)
//         .then(res => {
//             console.log(res);
//             console.log(res.data);
//             setPerson([...person, res.data])
//             setIsChanged(!ischanged)
//         })
//         .catch((err) => console.log(err))
//     }
    
//     return(
//         <div>
//             <PersonForm 
//                 onSubmitProp={createPerson} 
//             initialFirstName={''}
//             initialLastName={''}
//             initialAge={''}
//             />
//             <hr style={{width:"80%",height:"10px", margin:"20px auto", backgroundColor:"darkgrey", borderRadius:"10px"}} />
//             <PersonList ischanged={ ischanged } person={ person } removeFromDom={ removeFromDom }/> 
//         </div>
//     )
// }

// export default Main;