import React from 'react';
import {createRoot} from 'react-dom/client';
import Map from "./components/Map/Map";
import "./app.css";

function App() {
    const API = "https://api.openweathermap.org/data/3.0";
    const API_KEY = "6a4eee4d9ddfc802b9a6ee707bb634a7";
    return (
        <div className="app-container">
            <Map API={API} API_KEY={API_KEY}></Map>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App/>);
