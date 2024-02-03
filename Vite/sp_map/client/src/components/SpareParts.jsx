import React, { useState } from 'react';
import Autocomplete from "../components/Autocomplete"

function Register () {

    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [coords, setCoords] = useState([])
    const [name, setName] = useState("");
    const [JVM, setJVM] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [spotify, setSpotify] = useState("");
    const [ errors, setErrors] = useState("");

// if coords = [] -> validation error!!
    // const coordinates = [lon,lat]
    // console.log("Coords: ", coordinates)

    // console.log("lon: ",lon)
    // console.log("lat: ",lat)
    // console.log("address1: ",addressLine1)
    // console.log("address2: ",addressLine2)
    console.log("The coordinates: ",coords)






    const handleRegistration = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", register, {withCredentials: true})
            .then(res => {
                navigate("/admin/viewall")
            })
            .catch(err =>  {
                setErrors(err.response.data.error.errors); //Set Errors
            })
    }




    return (
        <div className='MainContainer'>

            <div className='FormWrapper'>
                <h1 className='Title'>Register Your Location</h1>

                <form className="RegForm" onSubmit={handleRegistration}>
                    <input type="hidden" name="coordinates" id="address" />
                    <input type="hidden" name="address" id="address" />

                    <div className='InputContainer'>
                        <label htmlFor="Username">< i className="fas fa-user fa-sm" style={{color: "#C89211"}}></i>&nbsp;  Name:</label>
                        <input type="text" name="Username" id='Username' placeholder='Enter Name...' />
                    </div>

                    <div className='InputContainer'>
                        <label htmlFor="Autocomplete">< i className="fas fa-map-marked-alt fa-sm" style={{color: "#C89211"}}></i>&nbsp;  Address:</label>
                        <Autocomplete setCoords={setCoords} setLon={setLon} setLat={setLat} setAddressLine1={setAddressLine1} setAddressLine2={setAddressLine2} />
                    </div>

                    <div className='InputContainer'>
                        <label htmlFor="JVM">< i className="fas fa-user-friends fa-sm" style={{color: "#C89211"}}></i>&nbsp; JVM Team:</label>
                        <input type="text" name="JVM" id='JVM' placeholder='Enter JVM Team...' />
                    </div>

                    <div className='InputContainer'>
                        <label htmlFor="Email">< i className="fas fa-envelope fa-sm" style={{color: "#C89211"}}></i>&nbsp;  Email:</label>
                        <input type="email" name='Email' id='Email'  placeholder='Enter Email Address...' />
                    </div>

                    <div className='InputContainer'>
                        <label htmlFor="Instagram">< i className="fab fa-instagram-square fa-sm" style={{color: "#C89211"}}></i>&nbsp;  Instagram:</label>
                        <input type="text" name="Instagram" id='Instagram' placeholder='Enter Instagram Handle...' />
                    </div>

                    <div className='InputContainer'>
                        <label htmlFor="Facebook">< i className="fab fa-facebook fa-sm" style={{color: "#C89211"}}></i>&nbsp;  Facebook:</label>
                        <input type="text" name='Facebook' id='Facebook'  placeholder='Enter Facebook Handle...' />
                    </div>

                    <div className='InputContainer'>
                        <label htmlFor="Spotify">< i className="fab fa-spotify fa-sm" style={{color: "#C89211"}}></i>&nbsp;  Spotify:</label>
                        <input type="text" name='Spotify' id='Spotify'  placeholder='Enter Spotify Handle...' />
                    </div>

                    <input type="button" value="SUBMIT" className='FormButton' />

                </form>

                <h6 className='Disclaimer'><b>Disclaimer - </b>This info will be seen by all who view the map.</h6>
                <h6 className='DisclaimerText'>
                    The location will show your pin exactly as you enter it. 
                    <br />
                    The more detailed address you provide, the more accurate it will be.
                    {/* <br />
                    If you do not want your social media handles or emails to be public,
                    <br />
                    leave them BLANK! */}
                </h6>
            </div>

        </div>
    )
}

export default Register






import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

const token = import.meta.env.VITE_MB_Mapbox_Token;
mapboxgl.accessToken = token;

function Map() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/allusers")
        .then((res) => {
            setUser(res.data);
            console.log("USER DATA", user);
        })
        .catch((err) => {
            console.log("Something went wrong when gathering pins!");
        });
    }, []);

    const geojson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                type: 'Point',
                coordinates: [-122.483261, 45.614846]
                },
                properties: {
                title: 'Mapbox',
                description: 'Street Parking HQ',
                JVM: 'HQ'
                }
            },
        ]
    };

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState((Math.random() - 0.5) * 360);
  const [lat, setLat] = useState((Math.random() - 0.5) * 100);
  const [zoom, setZoom] = useState(1);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        attributionControl: false,
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [lng, lat],
        zoom: zoom,
        });

    map.current.addControl(
        new mapboxgl.AttributionControl({
            customAttribution:
            '<a href="https://streetparking.com/" target="_blank">Street Parking</a>',
        })
    );

    map.current.addControl(new mapboxgl.NavigationControl({ showCompass: true, showZoom: true }));

    map.current.on('load', () => {
            map.current.flyTo({
                center: [-98.34462, 39.494143],
                zoom: 3.5,
                speed: 1.6,
                curve: 1.42,
                easing(t) {
                return t;
                },
            });
        });
    }, []);

    for (const feature of geojson.features) {
        const el = document.createElement('div');
        if(feature.properties.JVM == "HQ"){
            el.className = 'Marker HQ';    
        } 
        
        else if(feature.properties.JVM == "Pato"){
            el.className = 'Marker Pato';
        }
        
        else if (feature.properties.JVM == "Gallo"){
            el.className = 'Marker Gallo';
        }
        
        else if (feature.properties.JVM == "Paloma"){
            el.className = 'Marker Paloma';
        } 
        
        else if (feature.properties.JVM == ""){
            el.className = 'Marker';
        }

        new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map.current);
    }

    useEffect(() => {
        if (!map.current || user.length === 0) return; // wait until map is loaded and user data is available

            for (const oneUser of user) {
                const el = document.createElement('div');
                if (oneUser.JVM === 'HQ') {
                    el.className = 'Marker HQ';
                } else if (oneUser.JVM === 'Pato') {
                    el.className = 'Marker Pato';
                } else if (oneUser.JVM === 'Gallo') {
                    el.className = 'Marker Gallo';
                } else if (oneUser.JVM === 'Paloma') {
                    el.className = 'Marker Paloma';
                } else if (oneUser.JVM === '') {
                    el.className = 'Marker';
                }

                new mapboxgl.Marker(el).setLngLat(oneUser.coordinates).addTo(map.current);
            }

    }, [user]);

    return (
        <div className="MapBox">
        <div id="map" ref={mapContainer} className="MapContainer" />
        </div>
    );
}

export default Map;