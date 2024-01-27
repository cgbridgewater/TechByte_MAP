import React, { useState } from 'react';
const geoapifyKey = import.meta.env.VITE_MB_Geoapify_Key;
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

function Autocomplete  () {

    function sendPlaceDetailsRequest(feature, geocoder) {
        // console.log("FEATURE: ",feature);
        console.log("RESULTS PACKAGE")
        console.log("coordinates: ","[",feature.properties.lon,", ", feature.properties.lat,"]"); // the selected result
        console.log("addres line 1: ",feature.properties.address_line1); // the selected result
        console.log("addres line 2: ",feature.properties.address_line2); // the selected result
        return geocoder.sendPlaceDetailsRequest(feature);
    }

    return (
        <div >
            <GeoapifyContext apiKey={geoapifyKey}>
                <GeoapifyGeocoderAutocomplete
                    placeholder="Enter address here"
                    addDetails={true} // persists the data out
                    sendPlaceDetailsRequestFunc={sendPlaceDetailsRequest} // function to collect the data
                />
            </GeoapifyContext>
        </div>
    )
}

export default Autocomplete