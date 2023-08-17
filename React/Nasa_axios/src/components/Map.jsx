import { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ nasaData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const Fireball_Key = process.env.Google_FireBall_Key;
    const markers = nasaData.map(ev => {
        const date = new Date(ev.year)
        const year = date.getFullYear();
        return <LocationMarker lat={ev.reclat} lng={ev.reclong} onClick={() => setLocationInfo({ id: ev.id, name: ev.name, mass: ev.mass, year: year, recclass: ev.recclass })} />
    })
  return (
    <div className="Map">
        <GoogleMapReact
            bootstrapURLKeys={{key: Fireball_Key}}
            defaultCenter={ center }
            defaultZoom={ zoom }
        >
            {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} />}

    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 37.2431,
        lng: -115.7930
    },
    zoom: 0
}  

export default Map