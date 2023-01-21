
const Navibar = () => {

  return (
    <div>
      {/* navbar container */}
      <nav style={{height:"100px",background:"white", display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"2%", paddingRight:"2%", borderBottom:"10px double darkred"}}>
        
        {/* left side of navbar */}
        <div style={{width:"30%", textAlign:"start"}} className='LeftNav'>
          <h1 style={{color:"black", fontSize:"50px"}}>Favorite Authors</h1>
        </div>

        {/* filler if needed in center */}
        <div style={{width:"30%"}}>
        <img style={{height:"95px"}} src="https://media.gettyimages.com/id/1328171397/vector/man-writing-icon.jpg?s=612x612&w=gi&k=20&c=2o0D_NGFAzB86JM2Jxa22X7vc7ol3MYs2kjj539T4J0=" alt="" />
        </div>

        {/* right side of navbar */}
        <div style={{width:"30%", display:"flex", justifyContent:"space-between"}} className='RightNav'>
          <img style={{height: "90px", marginLeft:"50%"}} src="https://www.freeiconspng.com/uploads/writer-icon-png-25.png" alt="writing" />
        </div>
      </nav>
    </div>
  );
}

export default Navibar;