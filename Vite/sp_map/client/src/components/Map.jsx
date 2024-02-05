import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import patoIcon from "../assets/pato_icon.png"
import galloIcon from "../assets/gallo_icon.png"
import palomaIcon from "../assets/paloma_icon.png"
import KeyBanner from "../assets/key_banner.png"
import KeyLogo from "../assets/Key_Logo_Round.png"

mapboxgl.accessToken = import.meta.env.VITE_MB_Mapbox_Token;

function Map() {
    const [user, setUser] = useState([]);

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState((Math.random() - 0.5) * 360);
    const [lat] = useState((Math.random() - 0.5) * 100);
    const [zoom] = useState(1);



    // GET USERS TO CREATE PINS
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get("http://localhost:8000/api/allusers")
            .then((res) => {
                setUser(res.data);
                console.log("cleaned data: ", res.data);
            })
            .catch((err) => {
                console.log("ERROR : ", err)
                console.log("Something went wrong when gathering pins!");
            });
    }, []);

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
                center: [-122.483261, 45.614846], //HQ LOCATION
                // center: [-98.34462, 39.494143], // CENTER NA
                zoom: 8,
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
            <div>
                <img src="${KeyLogo}" alt="Team Icon" />
            </div>
            <div>
                <p>Instagram:</p>
                <a href="https://www.instagram.com/streetparking/" target="_blank" rel="noopener noreferrer">StreetParking</a>
            </div>
            <div>
                <p>Facebook:</p>
                <a href="https://www.facebook.com/streetparkingfitness" target="_blank" rel="noopener noreferrer">StreetParkingFitness</a>
            </div>
            <div>
                <p>YouTube:</p>
                <a href="https://www.youtube.com/streetparking" target="_blank" rel="noopener noreferrer">Street Parking</a>
            </div>
            <div>
                <p>Spotify:</p>
                <a href="http://open.spotify.com/user/5xm55d6kzn5pwtd3y7qmfjegw?si=7700329fc8e24bf5" target="_blank" rel="noopener noreferrer">Street Parking</a>
            </div>
            <div>
                <p>Podcast:</p>
                <a href="https://open.spotify.com/show/1pFbX5YlC9zovLjp5XyImk?si=D0EmQRNSQAKLbdyDo4hnPg" target="_blank" rel="noopener noreferrer">Street Parking Podcast</a>
            </div>
        </div>
        `
        // CREATE SPHQ MARKER 
        const el = document.createElement('div');
        el.className = "Marker HQ";
        new mapboxgl.Marker(el)
            .setLngLat([-122.483261, 45.614846])
            .setPopup(new mapboxgl.Popup().setHTML(SPHQMarkerInfo))
            .addTo(map.current);

    }, []);

    // // CREATE USER MARKERS // //
    useEffect(() => {
        // Loop through users
        if (!map.current || user.length === 0) return;
        for (const oneUser of user) {
            // create user marker element
            const el = document.createElement('div');
            // select user marker icon based on JVM team
            if (oneUser.JVM === 'Pato') {
                el.className = 'Marker Pato';
            } else if (oneUser.JVM === 'Gallo') {
                el.className = 'Marker Gallo';
            } else if (oneUser.JVM === 'Paloma') {
                el.className = 'Marker Paloma';
            } else if (oneUser.JVM === '') {
                el.className = 'Marker';
            }
            // JVM Icon Selector
            const JVMTeam = () => {
                if( oneUser.JVM == "Pato" ) {
                    return `<div><img src="${patoIcon}" alt="Team Icon" /></div>`
                } else if ( oneUser.JVM == "Gallo" ){
                    return `<div><img src="${galloIcon}" alt="Team Icon" /></div>`
                } else if ( oneUser.JVM == "Paloma" ){
                    return `<div><img src="${palomaIcon}" alt="Team Icon" /></div>`
                } else 
                    return `<div><img src="${KeyBanner}" alt="Team Icon" /></div>`
                    
                    
            };
            // Display Facebook if provided
            const facebookInfo = () => {
                if( !oneUser.facebook) {
                    return "<div></div>"
                } else 
                    return `
                    <div>
                        <p>Facebook:</p>
                        <a href="https://www.facebook.com/${oneUser.facebook}" target="_blank" rel="noopener noreferrer">${oneUser.facebook}</a>
                    </div>
                    `
            };
            // Display Instagram if provided
            const instagramInfo = () => {
                if( !oneUser.instagram) {
                    return "<div></div>"
                } else 
                    return `
                    <div>
                        <p>Instagram:</p>
                        <a href="https://www.instagram.com/${oneUser.instagram}" target="_blank" rel="noopener noreferrer">${oneUser.instagram}</a>
                    </div>
                    `
            };
            // Display Spotify if provided
            const spotifyInfo = () => {
                if( !oneUser.spotify) {
                    return "<div></div>"
                } else 
                    return `
                    <div>
                        <p>Spotify:</p>
                        <a href="http://open.spotify.com/user/${oneUser.spotify}" target="_blank" rel="noopener noreferrer">${oneUser.spotify}</a>
                    </div>
                    `
            };
            // package up user popup info
            const userMarkerInfo = 
            `<div>
                <h1>${oneUser.userName}</h1>
                ${JVMTeam()}
                ${instagramInfo()}
                ${facebookInfo()}
                ${spotifyInfo()}
            </div>`
            
            // package up user marker, popup and associated it to its location
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