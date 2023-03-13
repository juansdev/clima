import React from 'react';
import {createRoot} from 'react-dom/client';
import Map from "./components/Map/Map";

function App() {
    const API = "https://api.openweathermap.org/data/3.0";
    const API_KEY = process.env.MIX_OPENWEATHERMAP_API_KEY;
    return (
        <div className="app-container">
            <Map API={API} API_KEY={API_KEY}></Map>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App/>);
