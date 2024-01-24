import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const token = import.meta.env.VITE_MB_Token;
mapboxgl.accessToken = token;

function Map() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState((Math.random() - 0.5) * 360);
    const [lat, setLat] = useState((Math.random() - 0.5) * 100);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        setTimeout(500)
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            attributionControl: false,
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        // const marker = new mapboxgl.Marker()
        //     .setLngLat([-122.483261, 45.614846]) // Replace with your desired coordinates
        //     .addTo(map.current);

        // const markerElement = document.createElement('div');
        // markerElement.className = 'custom-marker'; // Replace 'custom-marker' with your own CSS class for the marker icon
        
        // const marker = new mapboxgl.Marker(markerElement)
        //     .setLngLat([-122.483261, 45.614846]) // Replace with your desired coordinates
        //     .addTo(map.current);

        map.current.addControl(new mapboxgl.AttributionControl({
            customAttribution: '<a href="https://streetparking.com/"  target="_blank">Street Parking</a>'
        }));

        map.current.addControl(new mapboxgl.NavigationControl({
            showCompass:true,
            showZoom:true,
        }));

        map.current.on('load', () => {
            map.current.flyTo({
                center: [-122.483261, 45.614846],
                zoom: 12,
                speed: 1.2,
                curve: 1.42,
                easing(t) {
                    return t;
                }
            }).once('moveend', createMarker);
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
        }, []);

        const createMarker = () => {
            const markerElement = document.createElement('div');
            markerElement.className = 'custom-marker'; // Replace 'custom-marker' with your own CSS class for the marker icon
            
            const marker = new mapboxgl.Marker(markerElement)
                .setLngLat([-122.483261, 45.614846]) // Replace with your desired coordinates
                .addTo(map.current);
        };

        const createShadow= () => {
            const shadowElement = document.createElement('div');
            shadowElement.className = 'custom-shadow'; // Replace 'custom-marker' with your own CSS class for the marker icon
            
            const shadow = new mapboxgl.Marker(shadowElement)
                .setLngLat([-122.483261, 45.614846]) // Replace with your desired coordinates
                .addTo(map.current);
        };

    return (
        <div className='MapBox'>
            {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Map