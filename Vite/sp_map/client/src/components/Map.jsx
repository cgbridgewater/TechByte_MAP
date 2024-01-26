import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const token = import.meta.env.VITE_MB_Mapbox_Token;
mapboxgl.accessToken = token;

function Map() {
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
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [-77.032, 38.913]
            },
            properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.',
            JVM: 'Gallo'
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [-122.414, 37.776]
            },
            properties: {
            title: 'Mapbox',
            description: 'San Francisco, California',
            JVM: 'Pato'
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [ -81.581238, 28.417665]
            },
            properties: {
            title: 'Mapbox',
            description: 'San Francisco, California',
            JVM: 'Paloma'
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [ -82.991635, 39.9844603]
            },
            properties: {
            title: 'Mapbox',
            description: 'Rogue',
            JVM: ''
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [ -117.918976, 33.812511]
            },
            properties: {
            title: 'Mapbox',
            description: 'Rogue',
            JVM: ''
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
        zoom: zoom
        });

        map.current.addControl(new mapboxgl.AttributionControl({
        customAttribution: '<a href="https://streetparking.com/" target="_blank">Street Parking</a>'
        }));

        map.current.addControl(new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
        }));

        map.current.on('load', () => {
        map.current.flyTo({
            center: [-98.344620, 39.494143],
            zoom: 3.5,
            speed: 1.6,
            curve: 1.42,
            easing(t) {
            return t;
            }
        })

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
    });

        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });

    }, []);

    return (
        <div className='MapBox'>
            <div id='map' ref={mapContainer} className="MapContainer" />
        </div>
    );
    }

export default Map;