import React, { useState } from 'react';
const geoapifyKey = import.meta.env.VITE_MB_Geoapify_Key;
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

function Autocomplete  () {
  const [type, setType] = useState();
  const [language, setLanguage] = useState();
  const [position, setPosition] = useState();
  const [countryCodes, setCountryCodes] = useState();
  const [debounceDelay, setDebounceDelay] = useState();
  const [limit, setLimit] = useState();
  const [value, setValue] = useState('');
  const [filterByCountryCode, setFilterByCountryCode] = useState();
  const [filterByCircle, setFilterByCircle] = useState();
  const [filterByRect, setFilterByRect] = useState();
  const [filterByPlace, setFilterByPlace] = useState();
  const [biasByCountryCode, setBiasByCountryCode] = useState();
  const [biasByCircle, setBiasByCircle] = useState();
  const [biasByRect, setBiasByRect] = useState();
  const [biasByProximity, setBiasByProximity] = useState();


    function onPlaceSelect(value) {
        console.log(value);
    }

    function onSuggectionChange(value) {
        console.log(value);
    }

    console.log(onPlaceSelect)

    return (
        <div >
            <GeoapifyContext apiKey={geoapifyKey}>
                <GeoapifyGeocoderAutocomplete
                    id="autocomplete"
                    placeholder="Enter address here"
                    value={value}
                    type={type}
                    lang={language}
                    position={position}
                    countryCodes={countryCodes}
                    limit={limit}
                    filterByCountryCode={filterByCountryCode}
                    filterByCircle={filterByCircle}
                    filterByRect={filterByRect}
                    filterByPlace={filterByPlace}
                    biasByCountryCode={biasByCountryCode}
                    biasByCircle={biasByCircle}
                    biasByRect={biasByRect}
                    biasByProximity={biasByProximity}
                    placeSelect={onPlaceSelect}
                    suggestionsChange={onSuggectionChange}
                    skipIcons={true}
                    skipDetails={true}
                    skipSelectionOnArrowKey={true}
                    allowNonVerifiedHouseNumber={true}
                    allowNonVerifiedStreet={true}
                    debounceDelay={debounceDelay}
                />
            </GeoapifyContext>
            
            
            <button onClick={(e) =>{onPlaceSelect(value)}}>button</button>
        </div>

    )
}

export default Autocomplete