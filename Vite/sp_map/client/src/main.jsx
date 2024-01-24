import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App.jsx'
import Map from './components/Map.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='MainContainer'>
      <App />
      <Map />
    </div>
  </React.StrictMode>,
)
