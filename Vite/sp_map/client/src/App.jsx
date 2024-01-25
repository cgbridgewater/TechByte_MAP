import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import MapPage from './views/MapPage.jsx';
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Profile from "./views/Profile.jsx";
import BadLink from "./views/BadLink.jsx";




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            {/* <> */}
              <Route path="/" default element={<MapPage/>}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/profile" element={<Profile />}/>
              {/* <Route path="/profile/edit" element={<ProfileEdit />}/> */}
              <Route path="/:bad/*" element={<Navigate to="/404-not-found"/>}/>
              <Route path="/404-not-found" element={<BadLink/>}/>
            {/* </> */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
)