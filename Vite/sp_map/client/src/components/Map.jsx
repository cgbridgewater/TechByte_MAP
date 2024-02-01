import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

const token = import.meta.env.VITE_MB_Mapbox_Token;
mapboxgl.accessToken = token;

function Map() {

    const [user, setUser] = useState([]);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState((Math.random() - 0.5) * 360);
    const [lat, setLat] = useState((Math.random() - 0.5) * 100);
    const [zoom, setZoom] = useState(1);

    // Get all users from DB to build pins
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

    // // HQ Pin
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

    // // Initialize Map
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        attributionControl: false,
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [lng, lat],
        zoom: zoom,
        });

        // // Custom Map Footer Tag
        map.current.addControl(
            new mapboxgl.AttributionControl({
                customAttribution:
                '<a href="https://streetparking.com/" target="_blank">Street Parking</a>',
            })
        );

        // // Add in Map Controlls (Zoom and Compass)
        map.current.addControl(new mapboxgl.NavigationControl({ showCompass: true, showZoom: true }));

        // // Create On Loading "fly to" Effect
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

        // // Mark HQ Location with Custom Pin
        for (const feature of geojson.features) {
            const el = document.createElement('div');
            el.className = "Marker HQ"
            // Add Pins To Map
            new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .addTo(map.current);
        }
    }, []);

    // Load pins once user data is ready
    useEffect(() => {
    if (!map.current || user.length === 0) return; // wait until map is loaded and user data is available
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
            // Add Pins To Map
            new mapboxgl.Marker(el)
                .setLngLat(oneUser.coordinates)
                .addTo(map.current);
        }
    }, [user]);

    return (
        <div className="MapBox">
            <div id="map" ref={mapContainer} className="MapContainer" />
        </div>
    );
}

export default Map;