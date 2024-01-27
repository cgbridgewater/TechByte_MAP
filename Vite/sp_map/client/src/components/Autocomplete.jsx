import React, { useState } from 'react';
const geoapifyKey = import.meta.env.VITE_MB_Geoapify_Key;
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

function Autocomplete  () {

    const [value, setValue] = useState('');

    function onPlaceSelect(value) {
        setValue(value);
        console.log(value);
    }

    function onSuggectionChange(value) {
        setValue(value);
        console.log("value", value);
    }

    return (
        <div >
            <GeoapifyContext apiKey={geoapifyKey}>
                <GeoapifyGeocoderAutocomplete
                    value={value}
                    placeSelect={onPlaceSelect}
                    suggestionsChange={onSuggectionChange}
                />
            </GeoapifyContext>
        </div>
    )
}

export default Autocomplete