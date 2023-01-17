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
      <nav style={{height:"100px", background:"grey", display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"2%", paddingRight:"2%", borderBottom:"10px double darkred"}}>
        {/* left side of navbar */}
        <div style={{width:"30%", textAlign:"start"}} className='LeftNav'>
          <h1 style={{color:"darkred"}}>Welcome To NaviBAR</h1>
        </div>
        {/* filler if needed in center */}
        <div style={{width:"30%"}}></div>
        {/* right side of navbar */}
        <div style={{width:"30%", display:"flex", justifyContent:"space-between"}} className='RightNav'>
          <a style={{color:"darkred"}} href="###">Link-1</a>
          <a style={{color:"darkred"}} href="###">Link-2</a>
          <a style={{color:"darkred"}} href="###">Link-3</a>
          <form onSubmit={ searchHandler }>
            <input 
              style={{width:"50%"}}
              type="text" 
              placeholder="Search" 
              name="searchBar"
              value={searchBar}
              onChange={ (e) => setSearchBar(e.target.value) }
            />
            <button style={{backgroundColor:"darkred", color:"white", border:"3px solid black"}} type="submit" >Search</button>
          </form>
          
        </div>
      </nav>
    </div>
  );
}

export default Navibar;