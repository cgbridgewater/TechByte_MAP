import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'mapbox-gl/dist/mapbox-gl.css';
// import MapTitle from './App.jsx'
import Map from './components/Map.jsx'
import MapTitle from './components/MapTitle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='MainContainer'>
      <MapTitle />
      <Map />
    </div>
  </React.StrictMode>,
)
