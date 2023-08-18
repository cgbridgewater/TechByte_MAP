const LocationInfoBox = ({ info, isHidden, setIsHidden }) => {

  return (
    <div className="LocationInfo" hidden={isHidden} key={info.id}>
        <p className="Close" onClick={()=> setIsHidden(true)}>X</p>
        <h2>Location Info</h2>
            <ul>
                <li>ID: <span className="Info">{ info.id }</span></li>
                <li>Name: <span className="Info">{ info.name }</span></li>
                <li>Mass: <span className="Info">{ info.mass }</span></li>
                <li>Year: <span className="Info">{ info.year }</span></li>
                <li>Rec Class: <span className="Info">{ info.recclass }</span></li>
            </ul>
    </div>
  )
}

export default LocationInfoBox