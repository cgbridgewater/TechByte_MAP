import { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ nasaData, center, zoom}) => {
    
    const Google_API = process.env.REACT_APP_GOOGLE_API;
    
    const [ isHidden, setIsHidden ] = useState(false)    
    
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = nasaData.map((nasaObj, index) => {
                                const date = new Date(nasaObj.year)
                                const year = date.getFullYear();
                                return <LocationMarker key={index} lat={nasaObj.reclat} lng={nasaObj.reclong} draggable={false}  onClick={() => {setLocationInfo({ id: nasaObj.id, name: nasaObj.name, mass: nasaObj.mass, year: year, recclass: nasaObj.recclass }); setIsHidden(false);}} />
                            })
    return (
        <div className="Map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: Google_API }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                draggable={true} 
                >
                {markers}
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox isHidden={isHidden} setIsHidden={setIsHidden} info={locationInfo} />}
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