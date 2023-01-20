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
      <nav style={{height:"100px",background:"goldenrod", display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"2%", paddingRight:"2%", borderBottom:"10px double #073DAA"}}>
        {/* left side of navbar */}
        <div style={{width:"30%", textAlign:"start"}} className='LeftNav'>
          <h1 style={{color:"#073DAA"}}>Product Manager</h1>
        </div>
        {/* filler if needed in center */}
        <div style={{width:"30%"}}>

        <img style={{height:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/2560px-Blockbuster_logo.svg.png" alt="" />

        </div>
        {/* right side of navbar */}
        <div style={{width:"30%", display:"flex", justifyContent:"space-between"}} className='RightNav'>
          <a style={{color:"#073DAA"}} href="###">Link</a>
          <a style={{color:"#073DAA"}} href="###">Link</a>
          <a style={{color:"#073DAA"}} href="###">Link</a>
          <form onSubmit={ searchHandler }>
            <input 
              style={{width:"50%", backgroundColor:"lightgray", borderColor:"goldenrod"}}
              type="text" 
              placeholder="Search" 
              name="searchBar"
              value={searchBar}
              onChange={ (e) => setSearchBar(e.target.value) }
            />
            <button style={{backgroundColor:"#073DAA", color:"white", border:"1px solid white"}} type="submit" >Search</button>
          </form>
          
        </div>
      </nav>
    </div>
  );
}

export default Navibar;