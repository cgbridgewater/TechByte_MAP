import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import patoIcon from "../assets/pato_icon.png"
import galloIcon from "../assets/gallo_icon.png"
import palomaIcon from "../assets/paloma_icon.png"
import KeyBanner from "../assets/key_banner.png"
import KeyLogo from "../assets/Key_Logo_Round.png"

const token = import.meta.env.VITE_MB_Mapbox_Token;
mapboxgl.accessToken = token;

function Map() {
    const [user, setUser] = useState([]);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState((Math.random() - 0.5) * 360);
    const [lat, setLat] = useState((Math.random() - 0.5) * 100);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get("http://localhost:8000/api/allusers")
            .then((res) => {
                setUser(res.data);
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
                    coordinates: [-122.483261, 45.614846],
                },
                properties: {
                    title: 'Mapbox',
                    description: 'Street Parking HQ',
                    JVM: 'HQ',
                },
            },
        ],
    };

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            attributionControl: false,
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [lng, lat],
            zoom: zoom,
        });

        map.current.addControl(
            new mapboxgl.AttributionControl({
                customAttribution: '<a href="https://streetparking.com/" target="_blank">Street Parking</a>',
            })
        );

        map.current.addControl(
            new mapboxgl.NavigationControl({
                showCompass: true, showZoom: true 
            })
        );

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

        const SPHQMarkerInfo = `
        <div>
            <h1>Street Parking HQ</h1>
            <br/>
            
            <div>
                <img className="JVMicon" src="${KeyLogo}" alt="Team Icon" />
            </div>
            <br/>
            <div>
                <p>Instagram:</p>
                <a href="https://www.instagram.com/streetparking/" target="_blank" rel="noopener noreferrer">Street Parking</a>
            </div>
            <br/>
            <div>
                <p>Facebook:</p>
                <a href="https://www.facebook.com/streetparkingfitness" target="_blank" rel="noopener noreferrer">Street Parking Fitness</a>
            </div>
            <br/>
            <div>
                <p>YouTube:</p>
                <a href="https://www.youtube.com/streetparking" target="_blank" rel="noopener noreferrer">Street Parking YouTube</a>
            </div>
        </div>
        `



        for (const feature of geojson.features) {
            const el = document.createElement('div');
            el.className = "Marker HQ";
            new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .setPopup(new mapboxgl.Popup().setHTML(SPHQMarkerInfo))
                .addTo(map.current);
        }
    }, []);

    useEffect(() => {
        if (!map.current || user.length === 0) return;
        for (const oneUser of user) {
            const el = document.createElement('div');
            if (oneUser.JVM === 'Pato') {
                el.className = 'Marker Pato';
            } else if (oneUser.JVM === 'Gallo') {
                el.className = 'Marker Gallo';
            } else if (oneUser.JVM === 'Paloma') {
                el.className = 'Marker Paloma';
            } else if (oneUser.JVM === '') {
                el.className = 'Marker';
            }

            const JVMTeam = () => {
                if( oneUser.JVM == "Pato" ) {
                    return patoIcon
                } else if ( oneUser.JVM == "Gallo" ){
                    return galloIcon
                } else if ( oneUser.JVM == "Paloma" ){
                    return palomaIcon
                } else 
                    return KeyBanner
            };


            const userMarkerInfo = 
            `<div>
                <h1>${oneUser.userName}</h1>
                <br/>
                
                <div>
                    <img className="JVMicon" src="${JVMTeam()}" alt="Team Icon" />
                </div>
                <br/>
                <div>
                    <p>Instagram:</p>
                    <a href="https://www.instagram.com/${oneUser.instagram}" target="_blank" rel="noopener noreferrer">${oneUser.instagram}</a>
                </div>
                <br/>
                <div>
                    <p>Facebook:</p>
                    <a href="https://www.facebook.com/${oneUser.facebook}" target="_blank" rel="noopener noreferrer">${oneUser.facebook}</a>
                </div>
                <br/>
                <div>
                    <p>Spotify:</p>
                    <a href="http://open.spotify.com/user/${oneUser.spotify}" target="_blank" rel="noopener noreferrer">${oneUser.spotify}</a>
                </div>
            </div>`
            
            new mapboxgl.Marker(el)
                .setLngLat(oneUser.coordinates)
                .setPopup(new mapboxgl.Popup().setHTML(userMarkerInfo))
                .addTo(map.current)
        }
    }, [user]);

    return (
        <div className="MapBox">
            <div id="map" ref={mapContainer} className="MapContainer" />
        </div>
    );
}



export default Map;
