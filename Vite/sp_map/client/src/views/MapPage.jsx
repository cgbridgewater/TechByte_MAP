import '../App.css'
import Map from '../components/Map.jsx'
import MapTitle from '../components/MapTitle.jsx'
function MapPage() {

  return (
    <div className='MainContainer'>
      <MapTitle />
      <Map />
    </div>
  )
}

export default MapPage