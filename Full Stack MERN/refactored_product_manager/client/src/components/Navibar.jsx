import React, {useState} from "react";

const Navibar = () => {

  const [ searchBar , setSearchBar] = useState("");
  const searchHandler = (event) => {
    event.preventDefault();
      alert(`Thanks for searching for "${searchBar}", but this feature isn't active yet`)
      setSearchBar("")
    }

  return (
    <div>
      {/* navbar container */}
      <nav style={{height:"100px",background:"grey", display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"2%", paddingRight:"2%", borderBottom:"10px double darkblue"}}>
        {/* left side of navbar */}
        <div style={{width:"30%", textAlign:"start"}} className='LeftNav'>
          <h1 style={{color:"darkblue", fontSize:"30px", fontWeight:800}}>Product Manager</h1>
        </div>
        {/* filler if needed in center */}
        <div style={{width:"20%"}}></div>
        {/* right side of navbar */}
        <div style={{width:"45%", display:"flex", justifyContent:"space-between"}} className='RightNav'>
          <a style={{color:"darkblue"}} href="###">Link-1</a>
          <a style={{color:"darkblue"}} href="###">Link-2</a>
          <a style={{color:"darkblue"}} href="###">Link-3</a>
          <form onSubmit={ searchHandler }>
            <input 
              style={{width:"50%",fontSize:"16px", border:"3px solid darkblue"}}
              type="text" 
              placeholder="Search" 
              name="searchBar"
              value={searchBar}
              onChange={ (e) => setSearchBar(e.target.value) }
            />
            <button style={{backgroundColor:"darkblue", color:"white", border:"3px solid black", fontSize:"16px"}} type="submit" >Search</button>
          </form>
          
        </div>
      </nav>
    </div>
  );
}

export default Navibar;